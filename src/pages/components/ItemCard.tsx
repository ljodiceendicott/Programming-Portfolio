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

const ItemCard: React.FC<ItemCardProps> = {
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
    <div className="price-card">
      <h1 className="text-2xl font-bold text-black">{title}</h1>
      <h4 className="font-semibold text-slate-800">{company}</h4>
      <div className="flex-wrap text-black">{description}</div>
      <div className="inline-flex justify-items-start space-x-1">
        {children}
      </div>
      <div>
        <h4 className="font-bold text-green-700">Overall Project Takeaway</h4>
        {postiveTakaway}
      </div>
      <div>
        <h4 className="text-amber-700">What I Learned From Project</h4>
        {learningops}
      </div>
      <div className="text-right text-black">Read more &gt;&gt;</div>
      {/* <div className="icons8-github"></div> */}
    </div>
  );
};
export default ItemCard;
