"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../components";
const Card = ({
  data,
  isCustom,
  index,
  toggleShowAll,
  showAll,
  itemIndex,
  setShowAll,
}: any): JSX.Element => {
  return (
    <div className="w-full pb-10 ">
      <div className="pb-7 w-full flex items-start ">
        <img src={data?.img} width={500} height={300} alt="" />
      </div>
      <p
        className={
          isCustom
            ? "text-[20px] font-normal text-[#000000]"
            : "text-[20px] font-normal text-[#76C357]"
        }
      >
        {showAll
          ? index === itemIndex
            ? data?.heading
            : data?.heading.slice(0, 37)
          : data?.heading.slice(0, 37)}

        {data?.heading.length > 37 && (
          <>
            {!showAll && data?.subHeading.length > 37 ? (
              <button
                onClick={() => toggleShowAll(index)}
                className="text-[#76C357] pl-1 text-3xl"
              >
                ...
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="text-red-500 pl-1 text-3xl"
              >
                ...
              </button>
            )}
          </>
        )}
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
