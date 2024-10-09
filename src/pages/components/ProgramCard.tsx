

interface ItemCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink: string;
  technology: Array<string>;
  screenshotpath: string;
  id: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  repoLink,
  id,
  liveLink,
  technology,
}) => {
  return (
      <div
        className="w-full columns-2 space-y-4 pl-2 text-left"
        id={"program-" + id}
      >
        <h1 className="text-3xl font-bold">{title}</h1>
        <div id="content" className="flex-wrap">
          {description}
        </div>
      </div>
  );
};
export default ItemCard;
