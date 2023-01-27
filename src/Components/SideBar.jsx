import React from "react";
import { ImHome } from "react-icons/im";
import { BiLibrary } from "react-icons/bi";
import { MdVideoCameraBack,MdSubscriptions,MdHistory } from "react-icons/md";
import SideBtn from "./SideBtn";
const SideBar = () => {
  const sideItems = [
    {name: "Home", icon: <ImHome/> },
    {name: "Shorts", icon: <MdVideoCameraBack/> },
    {name: "Subscriptions", icon: <MdSubscriptions/> },
    {name: "Library", icon: <BiLibrary/> },
    {name: "History", icon: <MdHistory/> },
  ];
  return <div className="hidden md:flex flex-col items-center pt-4 gap-8 px-2 lg:px-6">
    {sideItems.map((i)=>{
        return(
            <SideBtn name={i.name} icon={i.icon}/>
        )
    })}
  </div>;
};

export default SideBar;
