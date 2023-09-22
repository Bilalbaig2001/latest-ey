import React from "react";
import { Container, Button } from "../../components";
import { Quick_btns } from "../../constants/data";
const DiscoverSection = (): JSX.Element => {
  return (
    <div className="h-[340px] bg-[#1A1A24] my-8">
      <Container>
        <div className="lg:flex md:flex justify-between items-center lg:px-16 lg:h-[290px] md:h-[290px] ">
          <div className="lg:w-[55%] md:w-[55%] w-full lg:pt-0 md:pt-0 pt-10">
            <p className="text-white text-[32px] font-normal">Discover more</p>
            <input
              type="search"
              className="placeholder:text-[#000] h-[39px] px-2 w-[146px] focus:outline-none"
              placeholder="EY Search"
            />
          </div>
          <div className="lg:w-[45%] md:w-[45%] w-full lg:pt-0 md:pt-0 pt-5">
            <p className="text-white text-[16px]">Popular quick links</p>
            <div className="flex flex-wrap gap-3 mt-3">
              {Quick_btns.map((item) => (
                <div className="w-auto min-w-[50px]">
                  <Button label={item?.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiscoverSection;
