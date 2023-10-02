"use client";
import React, { useState } from "react";
import { Card, Container } from "../../components";
import { TRENDING_CARDS } from "../../constants/data";
const TrendingSection = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const toggleShowAll = (index: any) => {
    setItemIndex(index);
    setShowAll(!showAll);
  };
  return (
    <div className="py-6 bg-[#2E2E38]">
      <Container>
        <div>
          <p className="text-[40px] text-white font-normal">Trending now</p>
        </div>

        <div className="flex flex-wrap lg:justify-between  justify-center items-start mt-8 ">
          {TRENDING_CARDS?.map((item, index) => (
            <div className="w-[385px] lg:mt-0">
              <Card
                data={item}
                index={index}
                toggleShowAll={toggleShowAll}
                showAll={showAll}
                itemIndex={itemIndex}
                setShowAll={setShowAll}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrendingSection;
