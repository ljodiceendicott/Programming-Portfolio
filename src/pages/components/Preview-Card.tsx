import Link from "next/link";

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
      <div className="preview-card h-fit">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <div id="techcontainer" className="flex justify-center space-x-3">
          {/* {technologies.map((tech, idx) => (
            <div key={idx} id={tech + idx}>
              {tech}
            </div>
          ))} */}
          {technologies}
        </div>
        {/* This is where the Screenshot will go */}
        <div className="flex-row">{children}</div>
        <h4 className="font-semibold text-slate-800">{company}</h4>
        <div className="flex-wrap text-black">{description}</div>
        <Link href="/" className="right hover:font-bold hover:underline">
          Read more &gt;&gt;
        </Link>
        <div id="links">
          {/* <Link href={repoLink}>Link to Github Repo</Link> */}
          <a href={repoLink}>Link to repository for {title}</a>
        </div>
      </div>
    </>
  );
};
export default ItemCard;
