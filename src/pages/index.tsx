import type { NextPage } from "next";
import Spots from "../components/Spots";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Spots />
    </MainLayout>
  );
};

export default Home;
