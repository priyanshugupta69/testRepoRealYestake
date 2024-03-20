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

const Profile = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/properties');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching data");
    }
  }

  
  useEffect(() => {
    let token ="";
    if (typeof window !== "undefined") {
      token = document.cookie.split(';').find(c=>c.includes('token')).split('=')[1];
      // console.log(token);
    }
    // console.log("useEffect");
    getData();
    getProfile(token);
  }
  , []);


  const getProfile = async (token) => {
    console.log(token);
    try {
      // axios
      const response = await axios.get('http://localhost:3000/api/customers/user-profile/', {
        headers: {
          "Content-Type": "application",
          "Authorization": `Bearer ${token}`
        }
      });
      // console.log(response.data);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  // change the text color whichever tab is active 
  const activeTab = (index) => {
    if (value === index) {
      return "text-white font-normal Outfit text-[24px]";
    } else {
      return "text-[#ffffff99] font-normal Outfit text-[24px]";
    }
  };

  const PropertiesTabHandler = () => {
    setValue(0);
  };

  const RemindersTabHandler = () => {
    setValue(1);
  }
  const NotificationTabHandler = () => {
    setValue(2);
  }

  const firstName = profile.refUserId ? profile.refUserId.firstName : "XYZ";
  const lastName = profile.refUserId ? profile.refUserId.lastName : "...";
  const email = profile.refUserId ? profile.refUserId.email : "No email address";
  const phone = profile.refUserId ? profile.refUserId.phone : "No phone number";

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
            {firstName}{" "}{lastName}<span className=" lg:text-[24px] text-[18px] Satoshi capitalize font-normal pl-3 leading-[32.4px] text-[#ffffff99">{profile.custType}</span>
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
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
            </div>
           <div className='mt-5 items-center'>
              <PrimaryButton title={'Upload your photo'} customClassName="px-10"/>
            </div>
            </div>
            <div className="flex flex-col justify-end items-end mt-5">
                <div className=" flex justify-center">
                    <div></div>
                    <div>
                    <Typography className="lg:text-[30px] text-[20px] font-normal Satoshi">
                      <EnvelopeOpenIcon className="inline-block h-8 w-8 mr-2" aria-hidden="true" />
                    {email}
                    </Typography>
                </div>
                <div></div>
                </div>
                <div className="w-full pt-[20px] ">
                    <Typography className="lg:text-[32px] text-[20px] font-normal Outfit">Short Bio:{" "}
                    <span className="lg:text-[24px] text-[16px] text-[#ffffff99] font-light Satoshi">edfeu0df weuf0e we0f89ue we09fuwe09f wer09fuwer09 er9fu we09fu 0re09e4 34089tu0 0u. we237r8 r734rt7 br46yweyru wed79fewyf .
                    </span> </Typography>
                    <PencilIcon className="lg:h-6 lg:w-6 h-4 w-4" onClick={() => {
                  console.log("edit bio");
                 }} />
                </div>
            </div>
        </div>

        <hr className="lg:mt-16 mb-8 border-[#ffffff33] border-1" />
        <div className="flex lg:justify-between">
          <div></div>
          <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start w-6/12 ">
            <div onClick={PropertiesTabHandler} className={`cursor-pointer lg:text-[28px] text-[20px] ${activeTab(0)}`}>PROPERTIES</div>
            <div onClick={RemindersTabHandler} className={`cursor-pointer lg:text-[28px] text-[20px] ${activeTab(1)}`}>REMINDERS</div>
            <div onClick={NotificationTabHandler} className={`cursor-pointer lg:text-[28px] text-[20px] ${activeTab(2)}`}>NOTIFICATION</div>
          </div>
          <div></div>
        </div>

        <div className=" mt-6 mb-10 ">
        <div className="grid md:grid-cols-1 w-full">
          <div className="">
            {value === 0 && <Properties data={data} />}
            {value === 1 && <Reminders />}
            {value === 2 && <Notifications {...profile} />}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Profile