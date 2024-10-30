
interface PreviewCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company?: string;
  description: string;
  repoLink: string;
  repoLink2?: string;
  Frontendlink?: string;
  backendlink?: string;
  liveLink?: string;
  postiveTakaway?: string;
  learningops?: string;
  pageLink?: string;
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
  repoLink2,
  pageLink,
}) => {
  return (
    <>
      <div className="preview-card h-fit bg-slate-600 text-white">
        <h1 className="pb-2 text-2xl font-bold">{title}</h1>
        <div id="techcontainer" className="flex justify-center space-x-3 pb-3">
          {technologies}
        </div>
        <div className="flex-row">{children}</div>
        <h4 className="font-semibold">{company}</h4>
        <div className="flex-wrap">{description}</div>
        <div className="text-left font-semibold">
          <a
            className=" hover:cursor-pointer hover:font-bold hover:text-blue-900"
            href={repoLink}
          >
            Link to Github Repo
          </a>
          <br />
          { pageLink ?
          <a
            className=" hover:cursor-pointer hover:font-bold hover:text-blue-900"
            href={pageLink}
          >
            Read more on this project
          </a>
          : null
          }
        </div>
      </div>
    </>
  );
};
export default ItemCard;
