import React, { useEffect, useState } from 'react'
import { Avatar, Typography } from '@material-tailwind/react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import Properties from '@/components/User/Properties';
import Notifications from '@/components/User/Notifications';
import Reminders from '@/components/User/Reminders';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { PencilIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const UserProfileSingle = () => {

    // get id from the url
    const router = useRouter();
    const { id } = router.query;
    console.log('iddd', id);

  const [profile, setProfile] = useState([]);



  const getProfile = async () => {
    console.log('okk', id);
    try {
      // axios
      const response = await axios.get(`http://localhost:3000/api/customers/profile/${id}`, {
        headers: {
          "Content-Type": "application",
        }
      });
      // console.log(response.data);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfile();
  }
  , []);

  console.log('profile', profile);


  return (
    <>
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="container mx-auto lg:mt-[140px] mt-6 mb-8 px-4">
        <div>
            <Typography className="lg:text-[48px] text-[28px] font-bold Outfit capitalize">
            {profile.name===undefined?"":profile.name}<span className=" lg:text-[24px] text-[18px] Satoshi capitalize font-normal pl-3 leading-[32.4px] text-[#ffffff99">{profile.custType}</span>
            </Typography>
        </div>

        <div className="flex lg:flex-row flex-col justify-between pb-12 ">
            <div className='w-[540px] mt-4'>
            <div>
            <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5 w-[183px] h-[181px]"
            src={profile.profilePicture===undefined?"":profile.profilePicture}
          />
            </div>
           {/* <div className='mt-5 items-center'>
              <PrimaryButton title={'Upload your photo'} customClassName="px-10"/>
            </div> */}
            </div>
            <div className="flex flex-col justify-end items-end mt-5">
                <div className=" flex justify-center">
                    <div></div>
                    <div>
                    <Typography className="lg:text-[30px] text-[20px] font-normal Satoshi">
                      <EnvelopeOpenIcon className="inline-block h-8 w-8 mr-2" aria-hidden="true" />
                    {profile.email===undefined?"":profile.email}
                    </Typography>
                </div>
                <div></div>
                </div>
                {profile.bio && (
                    <div className="w-full pt-[20px] ">
                    <Typography className="lg:text-[32px] text-[20px] font-normal Outfit">Short Bio:{" "}
                    <span className="lg:text-[24px] text-[16px] text-[#ffffff99] font-light Satoshi">{profile.bio===undefined?"":profile.bio}
                    </span> </Typography>
                </div>
                )}
            </div>
        </div>

        <hr className="lg:mt-16 mb-8 border-[#ffffff33] border-1" />
        <div className="flex lg:justify-between">
          <div></div>
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start w-6/12 ">
            <div></div>
            <div className={`cursor-pointer lg:text-[28px] text-[20px] `}>PROPERTIES</div>
            <div></div>
          </div>
          <div></div>
        </div>

        {profile.properties ? (
            <div className=" mt-6 mb-10 ">
            <div className="grid md:grid-cols-1 w-full">
              <div className="">
                {/* <Properties  /> */}
                
              </div>
            </div>
            </div>
            ): (
                <div className="flex justify-center items-center h-[200px]">
                <Typography className="text-[#ffffff99] text-[24px]">No properties found</Typography>
                </div>
            )
            }
        {/* properties are not  */}

      
      </div>
    </>
   
  )
}

export default UserProfileSingle;