import { Spot } from "@prisma/client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import SpotCard from "../components/SpotCard";
import Layout from "../layout";

const fetchSpots = async (): Promise<Spot[]> => {
  const res = await fetch("/api/spot");
  return res.json();
};

const Home: NextPage = () => {
  const [spots, setSpots] = useState<Spot[] | null>(null);

  useEffect(() => {
    fetchSpots().then((res) => {
      setSpots(res);
    });
  }, []);

  return (
    <>
      {spots ? (
        <Layout title="Home">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        </Layout>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Home;
