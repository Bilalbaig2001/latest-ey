import React from "react";
import { Container } from "../../components";
import Image from "next/image";
const InsightsSection = (): JSX.Element => {
  return (
    <div className="lg:h-[245px] h-[200px]  w-full bg-[#F6F6FA]">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:h-[245px] h-[200px]">
          <div></div>
          <div className="lg:border-l-2 border-[#D9D9D9] flex justify-end items-center cursor-pointer ">
            <div className="pr-10">
              <p className="text-[16px] font-normal text-[#2E2E38] text-right ">
                Next
              </p>
              <p className="text-[32px] font-normal text-[#2E2E38]">Insights</p>
            </div>
            <Image
              src="./images/right-arrow-dark.svg"
              width={40}
              height={1}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InsightsSection;
