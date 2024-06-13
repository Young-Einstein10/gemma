import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#6366F1] to-[#7C3AED] py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              Your Personal Meal Planner
            </h1>
            <p className="text-gray-200 text-lg md:text-xl">
              Let our AI-powered meal planning app create delicious and
              nutritious meals tailored to your preferences and goals.
            </p>
            <Button
              color="white"
              className="bg-[#7C3AED] hover:bg-[#6366F1] transition-colors"
            >
              Get Started
            </Button>
          </div>
          <img
            src="/placeholder.svg"
            width={500}
            height={500}
            alt="Meal Planning"
            className="mx-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
