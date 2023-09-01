interface EmploymentCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company: string;
  description: string;
  keyparts: string;
  start?: string;
  end?: string;
  timeframe?: string;
}

const EmploymentCard: React.FC<EmploymentCardProps> = ({
  title,
  company,
  description,
  keyparts,
  timeframe,
  start,
  end,
}) => {
  return (
    <div className="text-center">
      <div className="text-xl">{title}</div>
      <div className="text-l">
        {company}
        <div>
          {keyparts}
          <br></br>
          {timeframe}
          {start} {end}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};
export default EmploymentCard;
