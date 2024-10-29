interface ProjectProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  company?: string;
  description?: string;
  repoLink?: string;
  liveLink?: string;
  postiveTakaway?: string;
  learningops?: string;
  pageLink?: string;
  technologies?: Array<string>;
}

const Project: React.FC <ProjectProps> = ({
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
    <div> test</div>
  );
};
export default Project;
