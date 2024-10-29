import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ className, children}) => {
  return (
<div>
<Header/>
{children}
<Footer/>
</div>
  );
};

export default Page;
