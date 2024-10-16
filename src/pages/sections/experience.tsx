import Header from "~/pages/components/Header";
import EmploymentCard from "../components/Employment-Card";

import Resume from "../updated_resume.json";

export default function experience() {
  const jobs = Resume.experience;

  return (
    <div>
      <Header />
      <div id="content" className="w-1/2 space-y-20 pt-10 text-left">
        {jobs.map((job, index) => (
          <EmploymentCard
            key={index}
            title={job.position}
            company={job.company}
            description={job.job_responsibilities}
            keyparts={job.key_parts_of_job.toString()}
            timeframe={job.date}
          ></EmploymentCard>
        ))}
        {/* Will Soon systematically read in these values from Resume */}
      </div>
    </div>
  );
}
