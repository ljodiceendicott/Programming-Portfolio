import Header from "~/pages/components/Header";
import PreviewCard from "./components/Preview-Card";

import resume from "~/pages/resume.json";
import Photos from "~/photos/screenshots/device.png";
// Add the images from screenshots

import Image from "next/image";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const images = [
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
    { Photos },
  ];
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
          experiences, as well as other things related to the development of my
          skills as a Software Engineer.
          <br />I have a strong interest in working anywhere along the
          techstack. <br />I am also a person who makes connections with my
          coworkers making them laugh while also being professional and reliable
        </h4>
        <h2 className="py-10 pl-4 text-left text-5xl font-bold">Projects</h2>
        <div
          id="projects"
          className="columns-2 space-y-12 max-md:w-screen max-md:columns-1"
        >
          {cv.projects.map((project, index) => (
            <PreviewCard
              key={index}
              title={project.name}
              description={project.description}
              repoLink={project.githublink}
              technologies={project.technologies}
              pageLink="/"
            >
              <Image
                src={Photos}
                alt={""}
                height={100}
                width={100}
                className="m-auto py-5"
              />
            </PreviewCard>
          ))}
        </div>
      </div>
    </div>
  );
}
