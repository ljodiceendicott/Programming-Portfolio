interface ItemCardProps {
  className?: string;
  title: string;
  company?: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  isProject: boolean;
  isJob: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  className,
  title,
  company,
  description,
  repoLink,
  liveLink,
}) => {
  return (
    <div className={className}>
      <h1 className="text-lg">{title}</h1>
      <h4 className="">{company}</h4>
      <div>{description}</div>
      <div>
        <link href={repoLink}>Repository</link>
        <link href={liveLink}>Live Code</link>
      </div>
    </div>
  );
};
export default ItemCard;
