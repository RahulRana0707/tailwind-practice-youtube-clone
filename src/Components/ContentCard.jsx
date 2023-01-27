import React from "react";
import {HiBadgeCheck} from "react-icons/hi"
const ContentCard = ({ thumbnail, title, profile }) => {
  let string = title;
  if(title.length > 45){
    string = title.slice(0,45) + "...";
  }
  return (
    <div className="mx-12 sm:mx-0">
      <div className="flex h-40 justify-center rounded-[0.7rem] shadow-lg shadow-gray-300 md:h-32 lg:h-48 xl:h-60 overflow-hidden">
        <img
          src={thumbnail}
          alt="Video_Thumbnail"
          className="object-cover w-full h-full rounded-[0.7rem] shadow-lg shadow-gray-300 hover:scale-110 duration-500 ease-out"
        ></img>
      </div>
      <div className="flex items-center pt-2">
        <div className="w-10 h-10 shrink-0">
          <img src={profile} alt="Profile_photo" className="rounded-full"></img>
        </div>
        <div className="flex items-center overflow-hidden">
            <p className="font-semibold text-[14px] pl-2">{string}</p>
        </div>
      </div>
      <div className="pl-12 text-gray-600">
        <p className="text-[12px pt-[2px]">SyntaxSolutions</p>
        <div className=" flex items-center">
        <p className="text-[12px] pt-[1px] pr-1">300,500 views &#x2022; 2 days ago</p>
        <HiBadgeCheck/>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
