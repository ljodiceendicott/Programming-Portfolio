import Header from "~/pages/components/Header";

import resume from "~/pages/resume.json";
import { api } from "~/utils/api";
import ItemCard from "./components/ItemCard";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const cv = resume;
  return (
    <div>
      <Header />
      <div className="align-center text-center">
        <h2 className="py-6 pt-20 text-3xl">Hello</h2>
        <h4 className="text-xl">
          my name is Luke Jodice. I am a 22 year old recent graduate, Looking to
          find opportinities in the field of Software Engineering.
          <br />
          This is my portfolio, which contains my previous projects,
          experiences, as well as other things related to my development of
          software engineering skills.
        </h4>
        <h2 className="py-10 pl-4 text-left text-5xl font-bold">Projects</h2>
        <div id="projects" className="columns-2 space-y-12">
          {cv.projects.map((project, index) => (
            <ItemCard
              key={index}
              title={project.name}
              description={project.description}
              pageLink="/"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
