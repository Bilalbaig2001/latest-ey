import React from "react";
import { Container, Card, Button } from "../../components";
import { Featured_card, Featured_releases } from "../../constants/data";
const FeaturedSection = (): JSX.Element => {
  return (
    <Container>
      <p className="text-[32px] font-normal text-[#2E2E38]">
        Featured press releases
      </p>
      <div className="lg:flex w-full">
        <div className="lg:w-[65%] w-full lg:flex md:flex  lg:justify-between md:justify-between justify-center gap-3 mt-8">
          {Featured_card?.map((item) => (
            <Card data={item} isCustom />
          ))}
        </div>
        <div className="lg:w-[35%] w-full lg:pt-3 lg:mt-0 -mt-14 lg:pl-28">
          {Featured_releases?.map((item) => (
            <>
              <p className="text-[14px] pt-3 font-normal text-[#000000]">
                {item?.heading}
              </p>
              <p className="pt-3 text-[#000000] font-normal text-[18px]">
                {item?.subHeading}
              </p>
              <p className="text-[14px] font-normal text-[#000000] pt-3">
                {item?.date}
              </p>
            </>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[200px]">
          <Button label="Visit the newsroom" isColor />
        </div>
      </div>
    </Container>
  );
};

export default FeaturedSection;

const arr = ["", "", ""];
