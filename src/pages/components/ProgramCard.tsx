import Link from "next/link";

interface ItemCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink: string;
  technology: Array<string>;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  repoLink,
  liveLink,
  technology,
}) => {
  return (
    <div>
      <h1 className="font-bold">{title}</h1>
      <div>
        {technology.map((tech, index) => (
          <div className="bg-stone-400 text-black">{tech}</div>
        ))}
      </div>
      <div className="flex-wrap text-sm">{description}</div>
      <Link href={repoLink}>Repo Link</Link>
    </div>
  );
};
export default ItemCard;
