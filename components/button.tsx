import React from "react";

const Button = ({ label, isColor }: any): JSX.Element => {
  return (
    <div
      className={
        isColor
          ? "text-black p-3 border border-[#2E2E38]  font-bold w-full text-center cursor-pointer transition-all hover:bg-[#2E2E38] hover:text-white"
          : "text-white p-3 border border-white font-normal w-full text-center cursor-pointer transition-all hover:bg-white hover:text-black"
      }
    >
      {label}
    </div>
  );
};

export default Button;
