import { Spot } from "@prisma/client";
import type { NextPage } from "next";
import useSWR from "swr";
import CustomError from "../components/CustomError";
import SpotCard from "../components/SpotCard";
import Layout from "../layout";

const Home: NextPage = () => {
  const { data, error } = useSWR<Spot[]>("/api/spots", (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  );

  if (error) return <CustomError statusCode={500} title="Server Error" />;

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
