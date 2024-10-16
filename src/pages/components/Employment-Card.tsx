
interface EmploymentCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company: string;
  description: string[];
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
/*
This is a failure as I have attempted to make a smart rendering of the job description when I know
that all of the items will not exceed 4 items. I then decided to render them using the array syntax
as this is how they are being read in by a json file.
Eventually I would like to have this be pulled from an API but I believe that the solution that I
have provided, works for my use-case.
*/
//   const bullet_items: string[] = description.split(',');
//   console.log(bullet_items);
// console.log(description)
// useEffect(() =>{ 
//   const ul = document.getElementById("description list") as HTMLElement;

//   var i = 1;
//   description.forEach(item => {
//   if(i>3){
//     return false;
//   }
//   const li = document.createElement('li');
//   li.textContent = item;
//   ul.appendChild(li);
//   console.log(i);
// //   i++;
// });
// });

  return (
    <div className="text-left -mr-56 ml-20 mt-6">
      <div className="text-2xl font-extrabold">{title}</div>
      <div className="text-l">
        <div className="text-xl font-bold">{company}</div>
        <div className="py-2">{keyparts}</div>
        {timeframe}
        {start} {end}
        <br/><br/>
        <ul id="description list" className="space-y-3">
          <li>{description[0]}</li>
          <li>{description[1]}</li>
          <li>{description[2]}</li>
          <li>{description[3]}</li>
        </ul>
        </div>
    </div>
  );
};
export default EmploymentCard;
