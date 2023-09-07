import Header from "~/pages/components/Header";
import ItemCard from "~/pages/components/ItemCard";

import Link from "next/link";

export default function projectsMain() {
  return (
    <main>
      <Header />
      <div id="content" className="space-y-4">
        <ItemCard
          title="Programming Portfolio"
          description="My updated Programming portfolio displaying the various programming that I have done."
          repoLink="https://github.com/ljodiceendicott/Programming-Portfolio"
          pageLink="/"
        ></ItemCard>

        <ItemCard
          title="CrowdWatch"
          description="A full stack solution to help inform business owners and customers of how busy a business is by displaying real time data as well as allowing the use of historical data. Also used for Senior Thesis at Endicott College"
          repoLink="https://github.com/ljodiceendicott/CrowdWatch"
          pageLink="/"
        >
          <Link href="/projects/crowdwatch/crowdwatch">Read More &gt;&gt;</Link>
        </ItemCard>

        <ItemCard
          title="Learn to code Java"
          description="A collab project with entire class in a mock Software Engineering enviorment. A learn-to-code game that teaches programming in Java."
          repoLink="https://github.com/EndicottCollegeCSC/learn-to-code-java"
          pageLink="/"
        >
          {/* Add Icons for Technology used */}
        </ItemCard>
        <ItemCard
          title="Dijkstra's Algorithm - Java"
          description="This is a representation of the use of Dijkstra's Algorithm in Java"
          repoLink="https://github.com/ljodiceendicott/DjikstrasAlgorithm-Java"
          pageLink="/"
        >
          {/* Add Icons for Technology used */}
        </ItemCard>
        <ItemCard
          title="GitFast"
          description="Helps streamline the use of Git with a GUI for ease of use"
          repoLink="https://github.com/ljodiceendicott/GitFast"
          pageLink="/"
        >
          <Link href="/projects/gitfast/gitfast">Read More &gt;&gt;</Link>
        </ItemCard>

        <ItemCard
          title="Musify"
          description="Clone of the webapp for the popular music streaming service Spotify"
          repoLink="https://github.com/ljodiceendicott/Musify"
          pageLink="/"
        >
          {/* Add Icons for Technology used */}
        </ItemCard>

        <ItemCard
          title="Patrick's Portfolio"
          description="Portfolio that was built for my friend Patrick Dunn to display his videos and photos"
          repoLink="https://github.com/ljodiceendicott/Patrick-Dunn-Portfolio"
          pageLink="/"
        >
          {/* Add Icons for Technology used */}
        </ItemCard>
      </div>
    </main>
  );
}
