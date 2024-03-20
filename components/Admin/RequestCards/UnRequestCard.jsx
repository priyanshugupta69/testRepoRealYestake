import { Typography } from '@material-tailwind/react';
import { get } from 'http';
import React, { useEffect, useState } from 'react'
import axios from "axios";

const UnRequestCard = ({ title,  date, time, name, firstName, lastName}) => {

    return (
      <div className="flex flex-col my-3 bg-[#ffffff38] rounded-[10px] border-2 border-[#ffffff1a]">
        <div className="flex flex-row justify-between p-4 items-center cursor-pointer">
          <div class="flex items-center gap-4 ">
            <img
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              class="inline-block relative object-cover object-center !rounded-full w-12 h-12"
            />
            <div className="">
              <h6 class="block Outfit md:text-[24px] text-[16px] antialiased md:font-bold  font-normal text-inherit">
                {firstName} {" "}{lastName}
              </h6>
              <p class="md:block hidden text-[16px] Outfit font-bold leading-normal text-whiet">
                {name}: 
                <span className="font-normal text-[#ffffff99] outfit">
                  {" "}
                  {title}
                  <span className="font-bold">to</span>{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <Typography variant="paragraph" color="white" className='Outfit md:text-[16px] text-[10px] leading-[12.6px] md:font-medium font-normal'>
              <span className="text-[#ffffff99] pr-2">{date} {" "}</span>
              <span className="font-bold ">{"  "}{" "} { time}</span>
            </Typography>
          </div>
        </div>
      </div>
    );
  };

export default UnRequestCard