import Header from "~/pages/components/Header";

import resume from "~/pages/updated_resume.json";
// Add the images from screenshots


export default function Home() {
  
  const cv = resume;
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="align-center text-center background-coloring">
        <h2 className="py-6 pt-20 text-3xl">Hello <br/><br/></h2>
        <h2 className="text-2xl">Welcome to my portfolio!</h2>
        <h4 className="text-xl">
          My name is Luke Jodice.
          <br /><br/>
          I am glad that you came.
          <br /><br/>I have a strong interest in working anywhere along the techstack
          and also like to make connections with my coworkers and other business
          professionals
        </h4>
        <h2 className="py-10 pl-4 text-left text-4xl font-bold">Projects</h2>
        <div
          id="projects"
          className="columns-2 space-y-12 max-md:w-screen max-md:columns-1"
        >
          {/* {cv.projects.map((project, index) => (
            <PreviewCard
              key={index}
              title={project.name}
              description={project.description}
              repoLink={project.githublink}
              technologies={project.technologies}
              pageLink="/"
            ></PreviewCard>
          ))} */}
        </div>
      </div>
    </div>
  );
}
