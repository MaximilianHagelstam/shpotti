import { Spot } from "@prisma/client";
import type { NextPage } from "next";
import CustomError from "../components/CustomError";
import SpotCard from "../components/SpotCard";
import usePagination from "../hooks/usePagination";
import Layout from "../layout";

const Home: NextPage = () => {
  const {
    data: spots,
    error,
    loading,
    size,
    setSize,
    isReachedEnd,
  } = usePagination<Spot>("/api/spots", 3);

  if (error) return <CustomError statusCode={500} title="Server Error" />;

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-8">
        {spots?.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>
      {!isReachedEnd && (
        <div className="text-center pb-8">
          <button
            disabled={loading}
            onClick={() => setSize(size + 1)}
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Home;
