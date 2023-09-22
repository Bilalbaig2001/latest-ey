"use client";
import React from "react";
import Image from "next/image";
import { Supporting_arr } from "../../constants/data";
import Slider from "react-slick";
const Supporting = (): JSX.Element => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        backgroundImage: `url(${"./images/supporting-img.svg"})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[400px] mt-14"
    >
      <div className="w-full">
        <Slider {...settings}>
          {Supporting_arr?.map((item) => (
            <div className="w-[25%] pt-[210px] border-r border-[#d9d9d97e] h-[400px] cursor-pointer  pb-6 px-3 hover:bg-[#00000054] transition-all">
              <div>
                <p className="text-white text-[28px] font-normal">
                  {item?.heading}
                </p>
                <p className="text-[16px] font-normal text-white pt-2">
                  {item?.subHeading}
                </p>
                <p className="text-[16px] font-normal text-white pt-4 flex items-center">
                  Discover
                  <Image
                    src="./images/right-arrow.svg"
                    width={20}
                    height={1}
                    alt=""
                    className="ml-2"
                  />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Supporting;
