import { Hero } from "../organisms/home/Hero";
import Partner from "../organisms/home/Partner";
import RecentWork from "../organisms/home/RecentWork";
import OurProduct from "../organisms/home/OurProduct";
import GetStarted from "../organisms/home/GetStarted";
import BlogArticles from "../organisms/home/BlogArticles";
import WhatWeDeliver from "../organisms/home/WhatWeDeliver";
import WeAreHere from "../organisms/home/WeAreHere";
import CTA from "../organisms/CTA";
import { StickySection } from "../atoms/StickySection";

export function LandingPageTemplate() {
  return (
    <div className="relative w-full">
      <StickySection zIndex={1} className="bg-primary">
        <Hero />
      </StickySection>
      <StickySection zIndex={2} className="bg-primary shadow-sm">
        <RecentWork />
      </StickySection>
      <StickySection zIndex={3} className="bg-primary shadow-sm">
        <Partner />
      </StickySection>
      <StickySection zIndex={4} className="bg-primary shadow-sm">
        <WhatWeDeliver />
      </StickySection>
      <StickySection zIndex={5} className="bg-primary shadow-sm">
        <OurProduct />
      </StickySection>
      <StickySection zIndex={6} className="bg-[#F6F6F6] shadow-sm">
        <GetStarted />
      </StickySection>
      <StickySection zIndex={7} className="bg-primary shadow-sm">
        <BlogArticles />
      </StickySection>
      <StickySection zIndex={8} className="bg-primary shadow-sm">
        <WeAreHere order="first" />
      </StickySection>
      {/* <StickySection zIndex={9}>
        <WeAreHere order="middle" />
      </StickySection>
      <StickySection zIndex={10}>
        <WeAreHere order="last" />
      </StickySection> */}
      <StickySection zIndex={11} className="bg-primary">
        <CTA />
      </StickySection>
    </div>
  );
}
