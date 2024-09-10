// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./DarkMode";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 backdrop-blur-sm sticky top-0 w-full bg-[rgba(0,0,0,0)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold">
                Streamline<span className="text-red-600">Pro.</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex gap-3 items-center space-x-4">
            <Link href="#features">
              <span className="hover:text-red-600">Features</span>
            </Link>
            <Link href="#pricing">
              <span className="hover:text-red-600">Pricing</span>
            </Link>
            <Link href="#testimonials">
              <span className=" hover:text-red-600">Testimonials</span>
            </Link>
            <Link href="#faq">
              <span className="hover:text-red-600">FAQ</span>
            </Link>
            <Link href="#contact">
              <Button>Get Started</Button>
              {/* <span className=" px-4 py-2 rounded-md ">Get Started</span> */}
            </Link>
            <ModeToggle />
          </div>
          <Sheet>
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <SheetTrigger>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    ></path>
                  </svg>
                </SheetTrigger>
              </button>
            </div>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  {" "}
                  <span className="text-2xl font-bold">
                    Streamline<span className="text-red-600">Pro.</span>
                  </span>
                </SheetTitle>
                <SheetDescription className="text-start">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="#features">
                      <span className="block px-3 py-2 text-base font-medium hover:rounded-md hover:bg-red-100 hover:text-red-600">
                        Features
                      </span>
                    </Link>
                    <Link href="#pricing">
                      <span className="block px-3 py-2 text-base font-medium hover:rounded-md hover:bg-red-100 hover:text-red-600">
                        Pricing
                      </span>
                    </Link>
                    <Link href="#testimonials">
                      <span className="block px-3 py-2 text-base font-medium hover:rounded-md hover:bg-red-100 hover:text-red-600">
                        Testimonials
                      </span>
                    </Link>
                    <Link href="#faq">
                      <span className="block px-3 py-2 text-base font-medium hover:rounded-md hover:bg-red-100 hover:text-red-600">
                        FAQ
                      </span>
                    </Link>
                    <Link href="#contact">
                      <span className="block px-3 py-2 text-base font-medium text-red-600 bg-red-100 rounded-md">
                        Get Started
                      </span>
                    </Link>
                    <ModeToggle />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && ( */}
      <div className="md:hidden"></div>
      {/* )} */}
    </nav>
  );
}
