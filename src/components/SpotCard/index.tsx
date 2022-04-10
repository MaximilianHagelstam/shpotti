import { Spot } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import classNames from "../../lib/classNames";

interface SpotCardProps {
  spot: Spot;
}

const SpotCard = ({ spot }: SpotCardProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={`/spots/${spot.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl">
        <Image
          alt={spot.title}
          src="/img/park.jpg"
          layout="fill"
          objectFit="cover"
          className={classNames(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>

      <h3 className="mt-4 text-sm text-gray-700">{spot.description}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{spot.title}</p>
    </a>
  );
};

export default SpotCard;
