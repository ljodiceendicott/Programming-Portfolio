import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mr-4">
      {/* flex space-x-2 border-t-neutral-900 px-2 py-3 justify-end pr-2 */}
      <button className="button-menu starting p-1 ">
        <Link href="/" className="color-white">
          Home
        </Link>
      </button>
      <button className="button-menu p-1">
        <Link href="/projects" className="color-white">
          Projects
        </Link>
      </button>
      <button className="button-menu p-1">
        <Link href="/experience" className="color-white">
          Experiences
        </Link>
      </button>
      <button className="button-menu ending p-1">
        <Link href="/articles" className="color-white">
          Articles
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
