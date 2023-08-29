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
  title,
  company,
  description,
  repoLink,
  liveLink,
}) => {
  return (
    <div className="price-card">
      <h1 className="text-lg">{title}</h1>
      <h4 className="">{company}</h4>
      <div>{description}</div>
      <div>
        {liveLink}

        {repoLink}
      </div>
    </div>
  );
};
export default ItemCard;
