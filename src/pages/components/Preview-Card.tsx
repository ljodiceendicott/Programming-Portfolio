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
      <div className="preview-card">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <div id="techcontainer" className="flex justify-center space-x-3">
          {/* {technologies.map((tech, idx) => (
            <div key={idx} id={tech + idx}>
              {tech}
            </div>
          ))} */}
          {technologies}
        </div>
        <h4 className="font-semibold text-slate-800">{company}</h4>
        <div className="flex-wrap text-black">{description}</div>
        <div className="flex-row text-right">{children}</div>
        <div id="links">
          {/* <Link href={repoLink}>Link to Github Repo</Link> */}
        </div>
      </div>
    </>
  );
};
export default ItemCard;
