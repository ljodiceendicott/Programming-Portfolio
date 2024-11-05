import Link from "next/link";
import CurrentJob from "~/pages/sections/currentjob";
import ProjectShowcase from "~/pages/sections/projectshowcase";
import resume from "~/pages/updated_resume.json";
import Page from "./components/Page";
// Add the images from screenshots


export default function Home() {
  
  const cv = resume;
  return (
    <Page>
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
          <br />
          <br />
          Please feel free to checkout the different pages on this site to get a
          better understanding of who I am as a Programmer and Overall Tech-head
        </h4>
        <Link href="/projects" className="hover:hover:text-blue-800">
          <h2 className="my-9 pl-4 text-left text-4xl font-bold">Projects</h2>
        </Link>
        <div
          id="projects"
          className="columns-2 space-y-12 max-md:w-screen max-md:columns-1"
        >
          <ProjectShowcase />
        </div>
        <Link href="/experience" className="hover:hover:text-blue-800">
          <h2 className="my-9 pl-4 text-left text-4xl font-bold">Experience</h2>
        </Link>
        <div>This is my current position and what this entails me doing</div>
        <div id="expierience">
          <CurrentJob></CurrentJob>
        </div>
      </div>
    </Page>
  );
}
