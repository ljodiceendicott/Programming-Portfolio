"use client";

import Navbar from "~/pages/components/Navbar";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className="main-background w-screen text-white">
      <div className="py-2.5 pl-4">
        <h1 className="text-xl">Luke Jodice</h1>
        <h2 className="text-md">Software Engineer</h2>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
