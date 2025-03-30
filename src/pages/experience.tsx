import Page from "~/pages/components/Page";
import EmploymentCard from "./components/Employment-Card";

import Resume from "./updated_resume.json";

export default function Experience() {
  const jobs = Resume.experience;

  return (
    <Page>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Professional Experience
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              My journey and professional growth through various roles
            </p>
          </header>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <EmploymentCard
                key={index}
                title={job.position}
                company={job.company}
                description={job.job_responsibilities}
                keyparts={job.key_parts_of_job}
                timeframe={job.date}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
