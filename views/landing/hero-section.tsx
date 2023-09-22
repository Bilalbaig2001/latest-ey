import React from "react";
import { Container } from "../../components";
const heroSection = (): JSX.Element => {
  return (
    <div
      style={{
        background: `url(${"./images/hero-image.svg"})`,
        backgroundSize: "cover",
      }}
      className="w-full h-[590px] bg-[#2E2E38] flex items-end pb-20"
    >
      <Container>
        <div className="lg:flex justify-between items-center">
          <div>
            <p className="text-[#FFE600] text-[16px] font-normal">Ai</p>
            <p className="text-[40px] text-white font-normal leading-[50px]">
              How can financial services firms derive <br /> value from
              generative AI?
            </p>
          </div>
          <div className="lg:text-right text-left lg:pt-0 pt-4">
            <p className="text-[14px] text-white  lg:border-r-2 lg:border-l-0 border-l-2 border-[#FFE600] lg:pr-2 pl-2 ">
              Featured
            </p>
            <p className="text-[14px] text-white  lg:border-r-2 lg:border-l-0 border-l-2 border-[#FFE600] lg:pr-2 pl-2 ">
              EY.ai - A unifying platform
            </p>
            <p className="text-[14px] text-white  lg:border-r-2 lg:border-l-0 border-l-2 border-[#FFE600] lg:pr-2 pl-2 ">
              9 Aug 2023
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default heroSection;
