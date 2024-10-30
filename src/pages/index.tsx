import Header from "~/pages/components/Header";

import ProjectShowcase from "~/pages/sections/projectshowcase";
import resume from "~/pages/updated_resume.json";
// Add the images from screenshots


export default function Home() {
  
  const cv = resume;
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="align-center background-coloring text-center">
        <h2 className="pt-20 text-3xl">
          Hello <br />
          <br />
        </h2>
        <h2 className="text-2xl">
          Welcome to my portfolio! <br />
          <br />
        </h2>
        <h4 className="text-xl">
          My name is Luke Jodice.
          <br />
          <br />
          Thank you for visiting my Portfolio!
          <br/><br/>Please feel free to checkout the different pages on this site to get a better understanding of who I am as a Programmer and Overall Tech-head</h4>
        <h2 className="py-10 pl-4 text-left text-4xl font-bold">Projects</h2>
        <div
          id="projects"
          className="columns-2 space-y-12 max-md:w-screen max-md:columns-1"
        >
          <ProjectShowcase />
        </div>
      </div>
    </div>
  );
}
