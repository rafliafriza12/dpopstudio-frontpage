import { Hero } from "../organisms/home/Hero";
import Partner from "../organisms/home/Partner";
import RecentWork from "../organisms/home/RecentWork";
import OurProduct from "../organisms/home/OurProduct";
import GetStarted from "../organisms/home/GetStarted";
import BlogArticles from "../organisms/home/BlogArticles";
import WhatWeDeliver from "../organisms/home/WhatWeDeliver";
import WeAreHere from "../organisms/home/WeAreHere";
export function LandingPageTemplate() {
  return (
    <>
      <Hero />
      <RecentWork />
      <Partner />
      <WhatWeDeliver />
      <OurProduct />
      <GetStarted />
      <BlogArticles />
      <WeAreHere order="first" />
      <WeAreHere order="middle" />
    </>
  );
}
