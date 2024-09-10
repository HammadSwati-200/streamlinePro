"use client";
import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 400) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 800) {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-transform ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
