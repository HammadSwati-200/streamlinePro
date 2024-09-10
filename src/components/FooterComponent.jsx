"use client";
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const FooterComponent = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Handle form submission logic here
    // Example: send the email to a server
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                <PhoneIcon className="h-6 w-6 mr-2" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center mb-2">
                <EnvelopeIcon className="h-6 w-6 mr-2" />
                <span>support@example.com</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-6 w-6 mr-2" />
                <span>1234 Street, City, Country</span>
              </li>
            </ul>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 md:flex-row"
            >
              <Input type="email" placeholder="Email" name="email" />

              <Button
                type="submit"
                className={`${isSubmitting && "opacity-50 cursor-not-allowed"}`}
                disabled={isSubmitting}
                name="subscribe"
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="py-4 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-red-500 font-semibold">StreamlinePro.</span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
