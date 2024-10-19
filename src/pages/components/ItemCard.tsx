interface ItemCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company?: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  postiveTakaway?: string;
  learningops?: string;
  pageLink: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  className,
  children,
  title,
  company,
  description,
  postiveTakaway,
  learningops,
  repoLink,
  liveLink,
  pageLink,
}) => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-extrabold text-black">{title}</h1>
        <h4 className="font-semibold text-slate-800">{company}</h4>
        <div className="flex-wrap text-black">{description}</div>
        <div className="flex-row text-right">{children}</div>
      </div>
    </>
  );
};
export default ItemCard;
