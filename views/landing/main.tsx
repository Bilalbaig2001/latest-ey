import React from "react";
import HeroSection from "./hero-section";
import TrendingSection from "./trending-section";
import CommunitySection from "./community-section";
import Bussiness from "./bussiness-section";
import Learning from "./learning-section";
import Supporting from "./supporting-section";
import InboxSection from "./inbox-section";
import FeaturedSection from "./featured-section";
import DiscoverSection from "./discover-section";
import InsightsSection from "./insights-section";
import { CummunityData, BuildingData } from "../../constants/data";
const main = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <CommunitySection data={CummunityData} />
      <CommunitySection data={BuildingData} />
      <Bussiness />
      <Learning />
      <Supporting />
      <InboxSection />
      <FeaturedSection />
      <DiscoverSection />
      <InsightsSection />
    </>
  );
};

export default main;
