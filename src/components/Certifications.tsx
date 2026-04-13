"use client";

import { FadeIn } from "./animation/FadeIn";

const certifications = [
  { source: "UDEMY · 2025", title: "Graphic Design Masterclass" },
  { source: "UDEMY · 2024", title: "The Ultimate React Course 2024: React, Next.js, Redux & More" }
];

export function Certifications() {
  return (
    <section className="section-padding border-t border-[#0A0A0A]">
      <div className="px-[20px] md:px-[80px] max-w-[1920px] mx-auto mb-16">
        <div className="md:w-1/4">
          <FadeIn className="font-mono text-[11px] uppercase">
            05 — CERTIFICATIONS
          </FadeIn>
        </div>
      </div>

      <div className="flex flex-col border-t border-[#0A0A0A]">
        {certifications.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.05} className="w-full">
            <div className="w-full group hover:bg-[#0A0A0A] hover:text-[#F1F1F1] transition-colors duration-200 border-b border-[#0A0A0A]">
              <div className="px-[20px] md:px-[80px] max-w-[1920px] mx-auto py-6 flex flex-col md:flex-row gap-4 md:gap-0">
                <div className="md:w-1/4 font-mono text-[11px] text-[#0A0A0A]/40 group-hover:text-[#F1F1F1]/70 transition-colors duration-200">
                  {cert.source}
                </div>
                <div className="md:w-3/4 font-light text-[14px] md:text-[15px]">
                  {cert.title}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
