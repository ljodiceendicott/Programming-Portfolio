import { useEffect, useState } from "react";
import Page from "~/pages/components/Page";
import ProgramCards from "~/pages/components/ProgramCard";


interface ProgramCardData {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink?: string;
  technology?: string;
  screenshotpath?: string;
  lastUpdated?: string;
  id?: string;
}

// var repos: ProgramCarddata[] = []

export default function ProjectsMain() {
  const [repos, setData] = useState<ProgramCardData[]>([]);;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("https://api.github.com/users/ljodiceendicott/repos?per_page=40") // replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const mappedRepos = data
          .map((repo: any) => ({
            title: repo.name,
            description: repo.description || "",
            repoLink: repo.html_url,
            technology: repo.language,
            lastUpdated: repo.pushed_at,
          }))
          .sort(
            (a: any, b: any) =>
              new Date(b.lastUpdated).getTime() -
              new Date(a.lastUpdated).getTime()
          );
        setData(mappedRepos);
        setLoading(false);
        console.log("Data found!");
        console.log(mappedRepos);
        // })
        // .catch((error) => {
        //   setError(error);
        //   setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <Page>
      <div className="text-center text-2xl font-bold text-slate-950 pt-3">
        Here are some of the projects that I have been working on:
      </div>
      <div className="text-center text-lg font-semibold ml-12 mr-12 mt-2">
        At this time, I am working on getting the descriptions added, Please
        feel free to click on the repository names and explore all of these
        projects found on GitHub!
      </div>
      <div
        id="content"
        className="ml-20 mt-12 w-3/4 justify-items-start space-y-20 text-left"
      >
        {/* This List will need to be modified to fit the projects that I am looking to show off*/}

        {loading ? <div>One moment while retrieving projects from Github</div>: null}

        {/* 
        Usage example
        
        <ProgramCards
          title={githubendpoint.name}
          description={githubendpoint.description}
          repoLink={githubendpoint.html_url}
          technology={githubendpoint.language.replace(",", " | ").toString()}
        > */}
        {/* Created at {githubendpoint.created_at} */}
        {/* </ProgramCards> */}
        {repos.map((repo, index) => (
          <ProgramCards
            key={index}
            title={repo.title}
            description={repo.description}
            repoLink={repo.repoLink}
            technology={repo.technology}
          ></ProgramCards>
        ))}
      </div>
    </Page>
  );
}
