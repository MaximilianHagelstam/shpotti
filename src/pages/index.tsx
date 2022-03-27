import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <Text fontSize="3xl">Shpotti</Text>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </main>
  );
};

export default Home;
