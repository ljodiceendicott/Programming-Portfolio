import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-screen space-x-2 border-t-neutral-900 px-2 py-3">
      <button className="button-menu p-1 ">
        <Link href="/" className="color-white">
          Home Page
        </Link>
      </button>
      <button className="button-menu p-1">
        <Link href="/posts/first-post" className="color-white">
          Second Page
        </Link>
      </button>
      <div className="pt-1">Name</div>
    </div>
  );
};

export default Navbar;
