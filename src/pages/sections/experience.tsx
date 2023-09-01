import Header from "~/pages/components/Header";
import EmploymentCard from "../components/Employment-Card";

import Resume from "../resume.json";

interface jobobj {
  position: string;
  company: string;
  timeframe: string;
  jobdescription: string;
  key_parts: Array<string>;
}

export default function experience() {
  const jobs = Resume.experience;

  return (
    <div>
      <Header />
      <div id="content" className="flex-wrapx space-y-8 pt-8">
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
