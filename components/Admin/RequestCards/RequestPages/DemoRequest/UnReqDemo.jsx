import React from 'react';
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { Inter } from "next/font/google";
import { Typography } from '@material-tailwind/react';

const inter = Inter({ subsets: ["latin"] });

const UnReqDemo = () => {
  return (
    <main
      className={`mt-4 container mx-auto min-h-screen items-center justify-between bg-[#160019] py-20 px-10 ${inter.className}`}
    >
      <div className="flex flex-col text-start w-full h-full rounded-2xl">
        <HeaderNavigation
          title={"New Demo Request from John Doe"}
          showBackButton={true}
        />
        </div>
      <div className=' items-center flex flex-row justify-between mt-12'>
        <div></div>
        <div className="border border-gray-800 rounded-[8px]  bg-[#ffffff38] lg:px-14 px-10 py-10  w-full max-w-[500px] flex lg:flex-wrap lg:flex-row flex-col lg:gap-12 gap-8">
            <div className='flex flex-col gap-2 '>
                <Typography className="text-white text-[16px] font-light Outfit leading-[20.16px]">
                    First Name:
                </Typography>
                <Typography className="text-white text-[16px] font-medium Outfit leading-[20.16px]">
                    Vanshul
                </Typography>
            </div>
            <div className='flex flex-col gap-1 '>
                <Typography className="text-white text-[16px] font-light Outfit leading-[20.16px]">
                    Last Name:
                </Typography>
                <Typography className="text-white text-[16px] font-medium Outfit leading-[20.16px]">
                    Vanshul
                </Typography>
            </div>
            <div className='flex flex-col gap-1 '>
                <Typography className="text-white text-[16px] font-[200] Outfit leading-[20.16px]">
                Business Type :
                </Typography>
                <Typography className="text-white text-[16px] font-medium Outfit leading-[20.16px]">
                    Vanshul
                </Typography>
            </div>
            <div className='flex flex-col gap-1 '>
                <Typography className="text-white text-[16px] font-light Outfit leading-[20.16px]">
                    Phone No:
                </Typography>
                <Typography className="text-white text-[16px] font-medium Outfit leading-[20.16px]">
                    8093837238
                </Typography>
            </div>
            <div className='flex flex-col gap-1 '>
                <Typography className="text-white text-[16px] font-light Outfit leading-[20.16px]">
                    Email Address:
                </Typography>
                <Typography className="text-white text-[16px] font-medium Outfit leading-[20.16px]">
                    cvanshulll@gmail.im
                </Typography>
            </div>
            <div className='flex flex-col gap-1 '>
                <Typography className="text-white text-[16px] font-light Outfit">
                    First Name:
                </Typography>
                <Typography className="text-white text-[16px] font-medium Outfit">
                    Vanshul
                </Typography>
            </div>
            <div className='flex flex-col gap-1 '>
                <Typography className="text-white text-[16px] font-light Outfit">
                    First Name:
                </Typography>
                <Typography className="text-white text-[16px] font-medium Outfit">
                    Vanshul
                </Typography>
            </div>
            

        </div>
        <div></div>
      </div>
    </main>
  )
}

export default UnReqDemo