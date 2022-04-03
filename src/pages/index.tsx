import type { NextPage } from "next";
import Spot from "../components/Spot";
import Layout from "../layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
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
