import Header from "~/pages/components/Header";
import ProgramCard from "~/pages/components/ProgramCard";

import resume from "~/pages/resume.json";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const cv = resume;
  return (
    <div>
      <Header />
      <body className="align-center text-center">
        <h2 className="py-6 pt-20 text-3xl">Hello</h2>
        <h4 className="text-xl">
          my name is Luke Jodice. I am a 22 year old recent graduate, Looking to
          find opportinities in the field of Software Engineering.
          <br />
          This is my portfolio, which contains my previous projects,
          experiences, as well as other things related to my development of
          software engineering skils.
        </h4>
        <div id="projects">
          <h2 className="pb-2 pl-4 text-left text-3xl font-bold">Projects</h2>
          <div id="wrapper" className="flex-wrap space-x-6 px-4">
            {cv.projects.map((project, index) => (
              <ProgramCard
                title={project.name}
                description={project.description}
                technology={project.technologies}
                repoLink={project.githublink}
                pageLink="/"
              />
            ))}
          </div>
        </div>
      </body>
    </div>
  );
}
