import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-screen space-x-2 border-t-neutral-900 px-2 py-3">
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
