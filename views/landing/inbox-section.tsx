import React from "react";
import { Container, Button } from "../../components";
const InboxSection = (): JSX.Element => {
  return (
    <Container>
      <div className="lg:h-[140px] md:h-[140px] w-full bg-[#FFE600] my-16 lg:flex md:flex  items-center justify-between lg:px-20 px-10 p-7">
        <div>
          <p className="text-[32px] text-[#000000] font-normal">
            Direct to your inbox
          </p>
          <p className="text-[20px] text-[#000000] font-normal">
            Stay up to date with our Editor's Picks newsletter. 
          </p>
        </div>
        <div className="w-[200px] lg:mt-0 md:mt-0 mt-4">
          <Button label="Subscribe" isColor />
        </div>
      </div>
    </Container>
  );
};

export default InboxSection;
