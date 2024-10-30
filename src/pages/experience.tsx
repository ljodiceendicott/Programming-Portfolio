import Page from "~/pages/components/Page";
import EmploymentCard from "./components/Employment-Card";

import Resume from "./updated_resume.json";

export default function Experience() {
  const jobs = Resume.experience;

  return (
    <Page>
      <div id="content" className="w-1/2 space-y-20 text-left mt-12">
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
    </Page>
  );
}
