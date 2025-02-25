import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import axios from "axios";

const RequestCardMobile = ({userProfileId, title,   date, time}) => {

  console.log(userProfileId)


  const [profile, setProfile] = useState([]);
  // getuserprofile
  const getUserProfile = async () => {
    try {
      const user = await axios.get(
        `http://localhost:3000/api/customers/profile/${userProfileId}`,
        {
          headers: {
            "Content-type": "application/json"
          },
        }
      );
      const result = user.data;
      setProfile(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  getUserProfile();
  }, []);

    return (
      <div className="flex flex-col my-3 bg-[#ffffff38] rounded-[10px] border-2 border-[#ffffff1a]">
        <div className="flex flex-row justify-start p-4 items-start cursor-pointer gap-2">
          <div className="flex items-center gap-4 ">
            <img
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              className="inline-block relative object-cover object-center !rounded-full w-10 h-10"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full ">
            <div className="flex flex-row justify-between w-full">
              <div>
                <h6 className="block Outfit md:text-[24px] text-[16px] antialiased md:font-bold  font-normal text-inherit">
                  {profile.name}
                </h6>
                <p className="md:block hidden text-[16px] Outfit font-bold leading-normal text-whiet">
                <span>Requesting a slot for service:</span>  {title}:
                  <span className="font-normal text-[#ffffff99] outfit">
                    {" "}
                    property,To{" "}
                    <span className="font-bold">to</span>{" "}
                  </span>
                </p>
              </div>
              <div className="Outfit md:text-[14px] text-[10px] md:font-medium font-normal leading-[12.6px]">
                <Typography variant="paragraph" color="white" className='text-[10px] md:text-[14px] Outfit'>
                  {date} {" "} {time}
                </Typography>
              </div>
            </div>
            <p className=" text-[10px] Outfit font-[300] leading-normal text-whiet">
            <span>Requesting a slot for service:</span> {title}:
              <span className="font-normal text-[#ffffff99] outfit">
                {" "}, To <span className="font-bold">to</span>{" "}
              </span>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    );
  };

export default RequestCardMobile