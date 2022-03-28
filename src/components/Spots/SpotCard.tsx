import Image from "next/image";

interface SpotCardProps {
  image: string;
  description: string;
}

const SpotCard = ({ image, description }: SpotCardProps) => {
  return (
    <div className="relative flex-col rounded-xl shadow-xl overflow-hidden">
      <Image src={image} width={1080} height={810} alt="Spot" />
      <p className="text-center">{description}</p>
    </div>
  );
};

export default SpotCard;
