import Page from "~/pages/components/Page";
import ProgramCard from "~/pages/components/ProgramCard";


export default function projectsMain() {
  return (
    <Page>
      {/* Will need to make this dynamic */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/project/:projectId" element={<Project/>} />
        </Routes>
      </BrowserRouter> */}

      {/* I would like to retrieve these projects live from my github and display all of the repos that I have as public
    This will use the format that is found in the json file of "github_endpoint.json" and use the endpoint of "https://api.github.com/users/ljodiceendicott/repos" which is a publicly facing endpoint
*/}

      <div id="content" className="ml-20 mt-12 w-3/4 space-y-20 text-left">
        {/* This List will need to be modified to fit the projects that I am looking to show off */}
        <ProgramCard
          title="Programming Portfolio"
          description="This is the code that is being used for this site"
          repoLink="https://github.com/ljodiceendicott/Programming-Portfolio"
          pageLink="/"
          technology={["Typescript | Tailwind CSS | "]}
        ></ProgramCard>

        <ProgramCard
          title="CrowdWatch"
          description="A full stack solution to help inform business owners and customers of how busy a business is by displaying real time data as well as allowing the use of historical data. Also used for Senior Thesis at Endicott College"
          repoLink="https://github.com/ljodiceendicott/CrowdWatch"
          pageLink="/"
          technology={[]}
          screenshotpath={""}
          id={""}
        >
          {/* <Link href="/projects/crowdwatch/crowdwatch">Read More &gt;&gt;</Link> */}
        </ProgramCard>

        <ProgramCard
          title="Learn to code Java"
          description="A collab project with entire class in a mock Software Engineering enviorment. A learn-to-code game that teaches programming in Java."
          repoLink="https://github.com/EndicottCollegeCSC/learn-to-code-java"
          pageLink="/"
          technology={[]}
          screenshotpath={""}
          id={""}
        >
          {/* Add Icons for Technology used */}
        </ProgramCard>
        <ProgramCard
          title="Dijkstra's Algorithm - Java"
          description="This is a representation of the use of Dijkstra's Algorithm in Java"
          repoLink="https://github.com/ljodiceendicott/DjikstrasAlgorithm-Java"
          pageLink="/"
          technology={[]}
          screenshotpath={""}
          id={""}
        >
          {/* Add Icons for Technology used */}
        </ProgramCard>
        <ProgramCard
          title="GitFast"
          description="Helps streamline the use of Git with a GUI for ease of use"
          repoLink="https://github.com/ljodiceendicott/GitFast"
          pageLink="/"
          technology={[]}
          screenshotpath={""}
          id={""}
        >
          {/* <Link href="/projects/gitfast/gitfast">Read More &gt;&gt;</Link> */}
        </ProgramCard>

        <ProgramCard
          title="Musify"
          description="Clone of the webapp for the popular music streaming service Spotify"
          repoLink="https://github.com/ljodiceendicott/Musify"
          pageLink="/"
          technology={[]}
          screenshotpath={""}
          id={""}
        >
          {/* Add Icons for Technology used */}
        </ProgramCard>

        <ProgramCard
          title="Patrick's Portfolio"
          description="Portfolio that was built for my friend Patrick Dunn to display his videos and photos"
          repoLink="https://github.com/ljodiceendicott/Patrick-Dunn-Portfolio"
          pageLink="/"
          technology={[]}
          screenshotpath={""}
          id={""}
        >
          {/* Add Icons for Technology used */}
        </ProgramCard>
      </div>
    </Page>
  );
}
