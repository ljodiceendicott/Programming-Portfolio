import PreviewCard from "../components/Preview-Card";

export default function experience() {

  return (
    <div className="flex space-x-4">
      {/* This is the showcase of the projects that I will be looking to show off */}
      {/* Will Soon systematically read in these values from Resume */}
      
      <PreviewCard
        title="Trivily"
        description="Chronological Historical Event Puzzle Game. Allows for historical knowledge to be checked daily and be able to share your score with your friends"
        repoLink="https://github.com/ljodiceendicott/Trivily"
        liveLink="https://trivily.vercel.app/" //Adding link to web hosted on vercel
        technologies={["Typescript | Next.js | Postgres"]}
      />
      <PreviewCard
        title="Gitfast"
        description="A tool that was created to help push code for small projects easier and quicker and with build in UI that can help the process of commiting code without having to go to the terminal"
        repoLink="https://github.com/ljodiceendicott/GitFast"
        technologies={["Python | Bash"]}
      />
     
    </div>
  );
}
