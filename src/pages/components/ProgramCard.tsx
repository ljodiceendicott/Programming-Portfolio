

interface ItemCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink?: string;
  technology?: Array<string>;
  screenshotpath?: string;
  id?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  repoLink,
  liveLink,
  technology,
  className,
  children
}) => {
  return (
    <div className="">
      <a href={repoLink}>
        <h1 className="text-2xl font-extrabold hover:cursor-pointer hover:text-blue-800">
          {title}
        </h1>
      </a>
      {/* <h4 className="font-semibold">{}</h4> */}
      <div className="flex-wrap">{description}</div>
      <div>{technology}</div>
      <div className="flex-row text-right">{children}</div>
    </div>
  );
};
export default ItemCard;
