import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Spot from "../components/Spot";
import Layout from "../layout";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Layout title="Home">
      {session ? (
        <a
          href={`/api/auth/signout`}
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign out
        </a>
      ) : (
        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
      )}

      {session && (
        <>
          <p>Signed in as {session.user.email}</p>
          <p>Name {session.user.name}</p>
          <p>Id {session.user.id}</p>
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={250}
            height={250}
          />
        </>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
    </Layout>
  );
};

export default Home;
