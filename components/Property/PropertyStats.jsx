import { Typography } from "@material-tailwind/react";
import React from "react";
import { MdRoom } from "react-icons/md";
import { TbBath, TbBed, TbCar, TbRuler } from "react-icons/tb";

const PropertyStats = ({ rooms, baths,  price, sqSize }) => {
  return (
    <>
    <div className="container mx-auto flex md:flex-row flex-col justify-start   md:gap-[80px] gap-6">
    <div>
    <div className="  md:py-2 px-4">
      <Typography variant="paragraph" color="white">BEDS</Typography>
      <div className="flex justify-start gap-3">
        <TbBed size={30} className="color-[#fffff99]" />
        <Typography variant="h5" color="white">{rooms}</Typography>
      </div>
      </div>
      <div className=" md:py-2 px-4">
      <Typography variant="paragraph" color="white">BATHS</Typography>
      <div className="flex justify-start gap-3">
        <TbBath size={30} className="color-[#fffff99]" />
        <Typography variant="h5" color="white">{baths}</Typography>
      </div>
      </div>
    </div>
      <div>
      <div className="md:py-2 px-4">
      <Typography variant="paragraph" color="white">SIZE</Typography>
      <div className="flex justify-start gap-3">
        <TbRuler size={30} className="color-[#fffff99]" />
        <Typography variant="h5" color="white">{sqSize}
        <sup>m2</sup></Typography>
      </div>
      </div>
      {/* <div className="md:py-2 px-4">
      <Typography variant="paragraph" color="white">Baloncies</Typography>
      <div className="flex justify-start gap-3">
        <TbCar size={30} className="font-normal" />
        <Typography variant="h5" color="white">2</Typography>
      </div>
      </div> */}
      <div className="md:py-2 px-4">
      <Typography variant="paragraph" color="white">CAR PARKING</Typography>
      <div className="flex justify-start gap-3">
        <TbCar size={30} className="font-normal" />
        <Typography variant="h5" color="white">2</Typography>
      </div>
      </div>
      </div>
      
    </div>
      
    </>
  );
};

export default PropertyStats;
