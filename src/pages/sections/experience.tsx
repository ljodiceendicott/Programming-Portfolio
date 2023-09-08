import Header from "~/pages/components/Header";
import EmploymentCard from "../components/Employment-Card";

import Resume from "../resume.json";

export default function experience() {
  const jobs = Resume.experience;

  return (
    <div>
      <Header />
      <div id="content" className="m-auto w-1/2 space-y-10 pt-10">
        {jobs.map((job, index) => (
          <EmploymentCard
            key={index}
            title={job.position}
            company={job.company}
            description={job.job_responsibilities.toString()}
            keyparts={job.key_parts_of_job.toString()}
            timeframe={job.date}
          ></EmploymentCard>
        ))}
        {/* Will Soon systematically read in these values from Resume */}
      </div>
    </div>
  );
}
