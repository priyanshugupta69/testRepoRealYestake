import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";
import { FavCard } from "@/components/Card/FavCard";
import { NavigationBar } from "@/components/UserNavbar";
import { SideNavBar } from "@/components/User/SideNavbar";
import FavCardData from "@/lib/FavCardData";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      {/* <div className="pl-4">
        <div className="md:block hidden">
          <NavigationBar />
        </div>
        <div className="md:hidden block">
          <SideNavBar />
        </div>
      </div> */}

      <div className="md:mt-6 mt-0 container mx-auto px-6">
        <div className="flex flex-row justify-between my-2  items-center">
        <div></div>
        <div className="">
          <Typography
            variant="h1"
            className="text-[#FFFFFF] Anton text-center lg:text-[40px] text-[26px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[60.13px] leading-3"
          >
            LIBRARY
          </Typography>
        </div>
        <SecondaryButton title="Add" customClassName="py-[10px] px-16  Outfit text-[16px] leading-[20.16px] font-normal" />
        </div>

        {/* Search */}
        <div className="relative w-full mt-6 items-center">
          <div className="relative grid h-full w-full min-w-[200px] rounded-[41px] bg-[#3A0242]">
            <input
              rows="1"
              placeholder="Search for request"
              className="text-[16px]  h-full  min-h-full w-full resize-y rounded !border-0 border-t-transparent bg-transparent p-4 Outfit leading-[20.16px] font-normal text-white outline outline-0 transition-all placeholder:text-[#FFFFFF] placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-[#FFFFFF]-200 focus:border-2 focus:border-gray-900 focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            />
            {/* <label className="before:content[' '] after:content[' ']  pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label> */}
          </div>
          <PrimaryButton
            title="Search"
            customClassName="!absolute top-1 right-1 py-[10px] px-8 items-center Outfit text-[16px] leading-[20.16px]"
          />
        </div>

        {/* cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-4 gap-2 mt-4">
        {FavCardData.map((item, index) => (
            <FavCard
            key={index}
            title={item.title}
            place={item.place}
            content={item.content}
            price={item.price}
            isNew={item.isNew}
          />
        ))
        }
      </div>

      </div>
    </>
  );
};

export default index;
