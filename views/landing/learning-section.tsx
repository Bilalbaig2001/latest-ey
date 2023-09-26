import React from "react";
import { Container } from "../../components";
const Learning = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.4766281512605042) 0%, rgba(0,0,0,0.36755952380952384) 0%),url(${"./images/learning-img.svg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
      className=" cursor-pointer bg-[#00000083] transition-all"
    >
      <Container>
        <div className="flex h-[550px] items-center lg:pl-6">
          <div>
            <p className="text-[#76C357] text-[16px] font-normal">Case Study</p>
            <p className="text-[#76C357] text-[16px] font-normal">
              Early years learning programs
            </p>
            <p className="text-[40px] text-white font-normal leading-[50px] pt-4">
              How a state distributed <br /> 162.3m in aid to early <br />{" "}
              learning workers
            </p>
            <div>
              <p className="text-[16px] text-white font-normal pt-8">
                The WKS Americas Consumer Industry Markets Leader, believes
                consumers will <br /> keep spending. She joins Real Time
                Insights to share how companies can use consumer
              </p>
              <p className="text-[16px] text-white font-normal pt-8">
                Read more
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Learning;
