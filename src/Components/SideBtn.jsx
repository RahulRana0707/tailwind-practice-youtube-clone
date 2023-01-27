import React from "react";

const SideBtn = ({ name, icon }) => {
  return (
    <div className="flex lg:flex-row lg:gap-4 items-center flex-col cursor-pointer gap-1 hover:bg-gray-300 w-full py-1 rounded-[0.5rem] duration-200 ease-out md:py-3 md:px-3">
      <div className="text-[20px] lg:text-[28px]">{icon}</div>
      <p className="text-[11px] lg:text-[17px]">{name}</p>
    </div>
  );
};

export default SideBtn;
