import React from "react";
import { Card, Container } from "../../components";
import { TRENDING_CARDS } from "../../constants/data";
const TrendingSection = (): JSX.Element => {
  return (
    <div className="py-6 bg-[#2E2E38]">
      <Container>
        <div>
          <p className="text-[40px] text-white font-normal">Trending now</p>
        </div>

        <div className="flex flex-wrap lg:justify-between md:justify-between justify-center items-start mt-8 ">
          {TRENDING_CARDS.map((item) => (
            <div className="w-[385px] lg:mt-0">
              <Card data={item} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrendingSection;
