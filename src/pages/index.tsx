import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Spots from "../components/Spots";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Spots />
      <Footer />
      {/* <h1 className="text-6xl font-bold text-center py-12">James</h1> */}
    </>
  );
};

export default Home;
