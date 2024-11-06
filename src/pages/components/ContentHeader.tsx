import React from "react";

interface ContentProps {
  name: string;
  technologies: string;
  description: string;
}

const ContentHeader: React.FC<ContentProps> = ({
  name,
  technologies,
  description,
}) => {
  return (
    <div className="text-center">
      <div className="text-3xl">{name}</div>
      <div className="text-xl" id="technologies">
        {technologies}
      </div>
      <div className="text-large" id="description">
        {description}
      </div>
    </div>
  );
};

export default ContentHeader;
