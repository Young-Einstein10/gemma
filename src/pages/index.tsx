import React from "react";
import Section1 from "@/components/views/section1";
import Section2 from "@/components/views/section2";
import Section3 from "@/components/views/section3";

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="flex-1">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </section>
  );
}
