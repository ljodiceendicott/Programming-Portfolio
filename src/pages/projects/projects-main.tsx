import Header from "~/pages/components/Header";
import ItemCard from "~/pages/components/ItemCard";

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
        >
          {/* Add Icons for Technology used */}
        </ItemCard>

        <ItemCard
          title="CrowdWatch"
          description="A full stack solution to help inform business owners and customers of how busy a business is by displaying real time data as well as allowing the use of historical data. Also used for Senior Thesis at Endicott College"
          repoLink="https://github.com/ljodiceendicott/CrowdWatch"
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
