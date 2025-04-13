import { type AppType } from "next/app";
import { useEffect } from "react";
import ThemeToggle from "../pages/components/ThemeToggle";
import "~/styles/card.css";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <ThemeToggle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
