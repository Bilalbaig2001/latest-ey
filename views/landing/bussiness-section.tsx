"use client";
import React, { useState } from "react";
import { Container } from "../../components";
import { Bussiness_item, BussinessData } from "../../constants/data";
import CommunitySection from "./community-section";
const Bussiness = () => {
  const [itemIndex, setItemIndex] = useState(0);
  return (
    <div className="py-8 bg-white">
      <Container>
        <div>
          <p className="text-[40px] text-[#2E2E38] font-normal">
            Trending business insights
          </p>
        </div>
        <div className="flex justify-center w-full items-center">
          <div className="lg:w-[80%] w-full lg:h-[70px] md:h-[70px]  mt-4">
            <div className=" text-center lg:flex md:flex   justify-center  gap-6">
              {Bussiness_item?.map((label, index) => (
                <h2
                  onClick={() => setItemIndex(index)}
                  className={
                    index === itemIndex
                      ? "text-[20px] font-normal text-[#2E2E38] w-full flex justify-center cursor-pointer h-[90px]  items-center text-center border-b-4 border-[#000000]"
                      : "text-[20px] font-normal text-[#2E2E38] w-full flex justify-center cursor-pointer h-[90px]  items-center text-center border-b-4 border-transparent"
                  }
                >
                  {label.label}
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:h-[450px] md:h-[450] h-auto pt-12 overflow-hidden w-full">
          <CommunitySection data={BussinessData} />
        </div>
      </Container>
    </div>
  );
};

export default Bussiness;
