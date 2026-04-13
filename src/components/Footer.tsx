"use client";

import { FadeIn, ClipUp } from "./animation/FadeIn";

export function Footer() {
  return (
    <footer id="contact" className="section-padding bg-[#F1F1F1] border-t border-[#0A0A0A] flex flex-col justify-between">
      <div className="px-[20px] md:px-[80px] max-w-[1920px] mx-auto w-full mb-16">
        <div className="md:w-1/4 mb-16">
          <FadeIn className="font-mono text-[11px] uppercase">
            06 — CONTACT
          </FadeIn>
        </div>

        <div className="flex flex-col text-[56px] md:text-[120px] font-bold leading-[0.9] tracking-tight uppercase mb-16">
          <ClipUp delay={0.1}>LETS BUILD</ClipUp>
          <ClipUp delay={0.2}>SOMETHING.</ClipUp>
        </div>

        <div className="w-full h-[1px] bg-[#0A0A0A] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 font-light text-[15px] md:text-[16px]">
          <FadeIn delay={0.3} className="flex flex-col md:flex-row gap-2 md:gap-8">
            <a href="mailto:syedsafwanpirzade@gmail.com" className="group relative w-fit block">
              syedsafwanpirzade@gmail.com
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#0A0A0A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
            <span className="hidden md:inline">·</span>
            <a href="tel:+917899986307" className="group relative w-fit block">
              +91 78999 86307
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#0A0A0A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col md:flex-row gap-2 md:gap-8">
            <a href="/SyedSafwan_Resume_Final.pdf" target="_blank" rel="noopener noreferrer" className="group relative w-fit block">
              Resume
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#0A0A0A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
            <span className="hidden md:inline">·</span>
            <a href="https://github.com/Syedsafwan24" target="_blank" rel="noopener noreferrer" className="group relative w-fit block">
              github.com/Syedsafwan24
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#0A0A0A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
            <span className="hidden md:inline">·</span>
            <a href="https://linkedin.com/in/syedsafwanpirzade" target="_blank" rel="noopener noreferrer" className="group relative w-fit block">
              linkedin.com/in/syedsafwanpirzade
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#0A0A0A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          </FadeIn>
        </div>
      </div>

      <div className="mt-auto px-[20px] md:px-[80px] max-w-[1920px] mx-auto w-full">
        <div className="w-full h-[1px] bg-[#0A0A0A] opacity-20 mb-6" />
        <FadeIn delay={0.5} className="flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-[11px] text-[#0A0A0A]/40 gap-4 md:gap-0 pb-8">
          <div>SYED SAFWAN PIRZADE · 2026</div>
          <div>DESIGNED & BUILT BY SAFWAN</div>
        </FadeIn>
      </div>
    </footer>
  );
}
