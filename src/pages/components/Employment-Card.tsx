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
    <div className="bg-cyan-200 p-3 text-center">
      <div className="text-2xl font-extrabold">{title}</div>
      <div className="text-l">
        <div className="text-xl font-bold">{company}</div>
        <div className="py-2">{keyparts}</div>
        {timeframe}
        {start} {end}
        <div>{description}</div>
      </div>
    </div>
  );
};
export default EmploymentCard;
