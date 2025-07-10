"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function TopPageBtn() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    setIsAtTop(window.scrollY < 50); // Hide button if within 50px of top
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isAtTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-20 bg-primary/90 text-white p-4 rounded shadow-lg hover:bg-primary/90 active:bg-primary/50 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </Button>
      )}
    </>
  );
}
