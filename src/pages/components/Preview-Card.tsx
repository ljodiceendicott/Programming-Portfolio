
interface PreviewCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company?: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  postiveTakaway?: string;
  learningops?: string;
  pageLink: string;
  technologies: Array<string>;
}

const ItemCard: React.FC<PreviewCardProps> = ({
  className,
  children,
  title,
  company,
  description,
  postiveTakaway,
  learningops,
  technologies,
  repoLink,
  pageLink,
}) => {
  return (
    <>
      <div className="preview-card h-fit bg-black text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div id="techcontainer" className="flex justify-center space-x-3">
          {technologies}
        </div>
        <div className="flex-row">{children}</div>
        <h4 className="font-semibold">{company}</h4>
        <div className="flex-wrap">{description}</div>
          {/* <Link href={repoLink}>Link to Github Repo</Link> */}
          {/* <a href={repoLink}>Link to repository for {title}</a> */}
      </div>
    </>
  );
};
export default ItemCard;
