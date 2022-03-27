import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <nav>
      <Link href="/about">
        <a className="text-3xl hover:underline">About</a>
      </Link>
    </nav>
  );
};

export default Home;
