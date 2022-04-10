import { Spot } from "@prisma/client";
import type { NextPage } from "next";
import useSWR from "swr";
import SpotCard from "../components/SpotCard";
import Layout from "../layout";

const Home: NextPage = () => {
  const { data, error } = useSWR<Spot[]>("/api/spots", (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  );

  if (error) return <div>Error</div>;

  return (
    <Layout title="Discover">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
