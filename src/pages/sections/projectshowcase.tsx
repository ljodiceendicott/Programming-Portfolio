import PreviewCard from "../components/Preview-Card";

export default function experience() {

  return (
    <div className="flex space-x-4">
      {/* This is the showcase of the projects that I will be looking to show off */}
      {/* Will Soon systematically read in these values from Resume */}
      <PreviewCard
        title="CrowdWatch"
        description="A full stack solution to help inform business owners and customers of how busy a business is by displaying real time data as well as allowing the use of historical data. Also used for Senior Thesis at Endicott College"
        repoLink="https://github.com/ljodiceendicott/CrowdWatch"
        pageLink="https://docs.google.com/document/d/e/2PACX-1vRTV-NPqKuE_ZPC1UbwoRSEr2qawrUnvC-V6Zrq60OuKGlauEKXZC211aPnS4S6dEEOjoETfdSVDvTg/pub"
        technologies={["Javascript | Python | HTML/CSS | Arduino C++"]}
      />
      <PreviewCard
        title="Scheduler"
        description="A tool that allows for full company scheduling and Querying where colleagues
are located to help better assist with Management"
        Frontendlink="https://github.com/ljodiceendicott/Scheduler-frontend"
        backendlink="https://github.com/ljodiceendicott/scheduler-backend"
        pageLink=""
        technologies={["Python | Javascript"]}
      />
    </div>
  );
}
