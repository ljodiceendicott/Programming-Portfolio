import Header from "~/pages/components/Header";
import EmploymentCard from "../components/Employment-Card";

import Resume from "../resume.json";

export default function experience() {
  const jobs = Resume.experience;

  return (
    <div>
      <Header />
      <div id="content" className="space-y-4">
        jbos
        {/* this is where the work experience card will go */}
        {jobs.toString()}
        <EmploymentCard title="" company="" jobDescription="" jobStart="" />
        {/* Will Soon systematically read in these values from Resume */}
      </div>
    </div>
  );
}
