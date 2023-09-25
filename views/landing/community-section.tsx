import React from "react";
import { Container, Button } from "../../components";

const CommunitySection = ({ data }: any): JSX.Element => {
  return (
    <div className={data?.isCustom ? "bg-transparent" : "bg-[#F6F6FA]"}>
      <Container>
        <div className="py-7  w-full grid lg:grid-cols-2 grid-cols-1  lg:h-[400px]">
          <div
            className={
              data?.isPosition
                ? "order-2 flex items-center lg:p-10 lg:pt-0 pt-6 "
                : data?.isCustom
                ? "order-2 flex items-center pr-6 pt-6 lg:pb-0 md:pb-0 pb-6"
                : "order-1 flex items-center lg:p-10 lg:pt-0 pt-6 lg:pb-0 md:pb-0 pb-6"
            }
          >
            <div>
              <p className="text-[#2E2E38] font-normal text-[27px]">
                {data?.heading}
              </p>
              <p className="text-[20px] text-[#2E2E38] font-normal pt-6">
                {data?.subHeading}
              </p>
              <div
                className={
                  data?.isCustom
                    ? "lg:w-[60%] md:w-[35%] w-full pt-7 "
                    : "lg:w-[30%] md:w-[35%] w-full pt-7 lg:mb-0 mb-5"
                }
              >
                <Button label={data?.btn} isColor />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${data?.image})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
            }}
            className={
              data.isPosition
                ? "order-1 lg:h-auto h-[300px]"
                : data?.isCustom
                ? "order-2 lg:h-auto h-[300px] cursor-pointer"
                : "order-2 lg:h-auto h-[300px]"
            }
          ></div>
        </div>
      </Container>
    </div>
  );
};

export default CommunitySection;
