import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Layout>
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
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={250}
            height={250}
          />
        </>
      )}
    </Layout>
  );
};

export default Home;
