"use client";
import React from "react";
import { Container } from "../../components";
import Slider from "react-slick";

const heroSection = (): JSX.Element => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {arr?.map((img) => (
          <div>
            <div
              style={{
                background: `url(${img?.img})`,
                backgroundSize: "cover",
              }}
              className="w-full lg:h-[590px] md:h-[590px] h-[480px] bg-[#2E2E38] flex items-end pb-20"
            >
              <Container>
                <div className="lg:flex justify-between items-center">
                  <div>
                    <p className="text-[#FFE600] text-[16px] font-normal">Ai</p>
                    <p className="lg:text-[35px] md:text-[32px] text-[28px] text-white font-normal leading-[50px]">
                      Online Portal Business and <br />
                      Technology Unifying Platform©
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default heroSection;

const arr = [
  { img: "https://ik.imagekit.io/WKS/hero-image.svg?updatedAt=1696236394777" },
  {
    img: "https://ik.imagekit.io/WKS/trending-img.svg?updatedAt=1696236437112",
  },
  {
    img: "https://ik.imagekit.io/WKS/banner-img-2.jpg?updatedAt=1696236471955",
  },
];
