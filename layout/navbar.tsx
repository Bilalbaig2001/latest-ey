import React from "react";
import { Container } from "../components";
import { NAV_ITEMS } from "../constants/data";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-[#2E2E38] justify-center flex w-full">
      <Container>
        <div className="w-full h-[90px] flex justify-between items-center ">
          <div className="lg:w-[45%] w-[50%] h-full  flex items-center">
            <div className="lg:w-[30%] w-full flex gap-1 ">
              <img
                src="./images/logo-3.png"
                className="w-24"
                width={115}
                height={1}
                alt=""
              />
              <p className="text-[10px] text-[#000] leading-[10px] flex items-end">
                Nature <br /> Our Future
              </p>
            </div>
            <div className="lg:flex hidden justify-between lg:w-[70%]">
              {NAV_ITEMS.map((nav) => (
                <h2 className="text-sm font-normal text-white cursor-pointer border-transparent transition-all h-[90px] flex items-center  border-b-4 hover:border-b-4 hover:border-[#FFE600]">
                  {nav.item}
                </h2>
              ))}
            </div>
          </div>
          <div className="lg:w-[55%] w-[80%] h-full  lg:flex hidden justify-end items-center gap-8">
            <div className="flex items-center gap-2 h-[90px] border-transparent transition-all cursor-pointer  border-b-4 hover:border-b-4 hover:border-[#FFE600]">
              <Image src="./images/search.svg" width={20} height={1} alt="" />
              <h2 className="text-sm font-normal text-white cursor-pointer ">
                Search
              </h2>
            </div>
            <div className="flex items-center gap-2 h-[90px] border-transparent transition-all cursor-pointer  border-b-4 hover:border-b-4 hover:border-[#FFE600]">
              <Image src="./images/user.svg" width={20} height={1} alt="" />
              <h2 className="text-sm font-normal text-white cursor-pointer ">
                My WKS
              </h2>
            </div>
            <div className="flex items-center gap-2 h-[90px] border-transparent transition-all cursor-pointer  border-b-4 hover:border-b-4 hover:border-[#FFE600]">
              <Image src="./images/world.svg" width={20} height={1} alt="" />
              <h2 className="text-sm font-normal text-white cursor-pointer ">
                United States
              </h2>
            </div>
          </div>
          <div className="lg:hidden flex w-[80%] justify-end items-center">
            <Image
              src="./images/hamicon.svg"
              width={25}
              height={1}
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
