interface EmploymentCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company: string;
  jobDescription: string;
  jobStart: string;
  jobEnd?: string;
}

const EmploymentCard: React.FC<EmploymentCardProps> = ({
  title,
  company,
  jobDescription,
  jobStart,
  jobEnd,
}) => {
  return (
    <div className="text-right">
      <div className="text-xl">{title}</div>
      <div className="text-l">
        {company}
        <div>
          {jobStart} - {jobEnd}
        </div>
        <div>{jobDescription}</div>
      </div>
    </div>
  );
};
export default EmploymentCard;
