import Image from "next/image";

import img from "~/photos/screenshots/device.png";

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
  id: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  repoLink,
  id,
  liveLink,
  technology,
}) => {
  return (
    <>
      <div
        className="w-full columns-2 space-y-4 pl-2 text-left"
        id={"program-" + id}
      >
        <h1 className="text-3xl font-bold">{title}</h1>
        <div id="content" className="flex-wrap">
          {description}
          {/* <Link
            href={repoLink}
            className="hover:font-extrabold hover:text-blue-700"
          >
            <br /> Repo Link
          </Link> */}
        </div>
        <div id="img">
          {/* <Image
          src={screenshotpath}
          width={100}
          height={100}
          alt={title + "-screenshot-img"}
        /> */}
          <Image
            src={img}
            width={400}
            height={400}
            alt={title + "-screenshot-img"}
            className="text-center"
          />
        </div>
      </div>
    </>
  );
};
export default ItemCard;
