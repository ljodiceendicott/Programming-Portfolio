import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mr-4 mt-24">
      {/* flex space-x-2 border-t-neutral-900 px-2 py-3 justify-end pr-2 */}
      <button className="button-menu p-1 ">
        <Link href="/" className="color-white">
          Home
        </Link>
      </button>
      <button className="button-menu p-1">
        <Link href="/projects/projects-main" className="color-white">
          Projects
        </Link>
      </button>
      <button className="button-menu p-1">
        <Link href="/sections/experience" className="color-white">
          Experiences
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
