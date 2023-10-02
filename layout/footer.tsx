import React from "react";
import { Container } from "../components";
import Image from "next/image";
import { FOOTER_ITEMS, FOOTER_ICONS } from "../constants/data";
import Link from "next/link";
const Footer = (): JSX.Element => {
  return (
    <Container>
      <div className="py-14">
        <div className="w-full lg:flex">
          <div className="lg:w-[20%] w-full flex gap-1 lg:mb-0 mb-5">
            <img
              src="./images/logo-2.png"
              width={160}
              height={1}
              alt=""
              className="w-[150px]"
            />
            <p className="text-[13px] text-[#000] leading-[10px] flex items-end pb-1">
              Nature our <br /> future
            </p>
          </div>
          <div className="lg:w-[80%] w-full flex items-center flex-wrap gap-6">
            {FOOTER_ITEMS?.map((item) => (
              <p className="text-[16px] font-normal text-[#000] leading-6 cursor-pointer border-b-2 border-[#00000050] hover:border-b-2 hover:border-[#000] ">
                {item?.label}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-[#2E2E38AB] text-[14px] font-normal">
              WKS refers to the global network, and may refer to one or more of
              the member firms of Wang Khan Stern Corp, each a
              separate legal entity.
            </p>
          </div>
          <div className=" flex flex-wrap gap-4 lg:justify-end md:justify-end justify-start lg:mt-0 md:mt-0 mt-5">
            {FOOTER_ICONS.map((item) => (
              <Link href={item?.url} target="blank">
                <div className=" border border-[#000] h-[50px] w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer">
                  <img src={item?.icon} width={25} height={25} alt="" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
