import React from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Cookie className="h-6 w-6" />
            <span className="text-lg font-bold">Meal Planner</span>
          </Link>
        </div>
        <nav className="flex gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
