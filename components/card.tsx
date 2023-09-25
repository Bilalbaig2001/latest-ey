"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../components";
const Card = ({ data, isCustom }: any): JSX.Element => {
  return (
    <div className="w-full pb-10 ">
      <div className="pb-7 w-full flex items-start ">
        <Image src={data?.img} width={500} height={300} alt="" />
      </div>
      <p
        className={
          isCustom
            ? "text-[20px] font-normal text-[#000000]"
            : "text-[20px] font-normal text-[#00bf41]"
        }
      >
        {data?.heading}
      </p>
      <p
        className={
          isCustom
            ? "text-[14px] font-normal text-[#000000] pt-3"
            : "text-[14px] font-normal text-white pt-6"
        }
      >
        {data?.subHeading}
      </p>

      <div className="w-[40%] pt-8">
        <Button label="Learn more" />
      </div>
    </div>
  );
};

export default Card;
