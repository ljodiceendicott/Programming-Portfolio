import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink: string;
  technology: Array<string>;
  screenshotpath: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  repoLink,
  // screenshotpath,
  liveLink,
  technology,
}) => {
  return (
    <div className="w-full columns-2">
      <h1 className="text-left text-lg font-bold">{title}</h1>
      <div id="content" className="flex-wrap text-sm">
        {description}
        <Link href={repoLink}>Repo Link</Link>
      </div>
      <div id="img">
        This is a Screenshot for {title}
        {/* <Image
          src={screenshotpath}
          width={100}
          height={100}
          alt={title + "-screenshot-img"}
        /> */}
        <Image
          src="../../photos/screenshots/device.png"
          width={100}
          height={100}
          alt={title + "-screenshot-img"}
        />
      </div>
    </div>
  );
};
export default ItemCard;
