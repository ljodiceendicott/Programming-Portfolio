
interface PreviewCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company?: string;
  description: string;
  repoLink?: string;
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
  Frontendlink,
  backendlink,
  pageLink,
}) => {
  return (
    <>
      <div className="preview-card h-auto overflow-auto bg-slate-100 text-black">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div id="techcontainer" className="flex justify-center space-x-3">
          {technologies}
        </div>
        <div className="flex-row">{children}</div>
        <h4 className="font-semibold">{company}</h4>
        <div className="flex-wrap">{description}</div>
          <br/>
          {repoLink && pageLink ? (
            <div className="text-left font-semibold">
            <a
              className=" hover:cursor-pointer hover:font-bold hover:text-blue-900"
              href={repoLink}
            >
              Link to Github Repo
            </a>
            <br/>
            <a
              className=" hover:cursor-pointer hover:font-bold hover:text-blue-900"
              href={pageLink}
            >
              Read more on this project
            </a>
            </div>
          ) :  <div className="text-left font-semibold">
            <a
              className=" hover:cursor-pointer hover:font-bold hover:text-blue-900"
              href={Frontendlink}
            >
              Link to Github Repo for Frontend
            </a>
          <br/>
            <a
              className=" hover:cursor-pointer hover:font-bold hover:text-blue-900"
              href={backendlink}
            >
              Link to Github Repo for Backend
            </a>
        </div>
          }
      </div>
    </>
  );
};
export default ItemCard;
