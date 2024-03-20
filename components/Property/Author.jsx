import { Avatar, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'


  

const Author = ({p}) => {
  

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/customers/profile/${p.owner._id}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching data");
    }
  }
  
  useEffect(() => {
    console.log("useEffect");
    getData();
  }
  , []);

  // console.log("data", data.profilePicture)

  return (
    
    <div className="my-14 p-6">
        <Typography
          variant="h1"
          className="Outfit font-normal md:text-[24px] text-[16px] text-[#ffffff] leading-[30.24px]"
        >
          About the Owner
        </Typography>
        <div className="flex flex-col py-4">
          <div className="Outfit font-normal md:text-[20px] text-[16px] leading-[25.2px] py-4">
            <div className="flex items-center gap-4">
              <Avatar
                src={data.profilePicture}
                alt="avatar"
              />
              <div>
                <Typography variant="h6">{data.name}</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                {data.email}
                </Typography>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="flex flex-row items-center justify-between gap-2  Outfit font-normal md:text-[16px] text-[9px] leading-[25.2px] pt-6">
              <div>Phone No : {data.phoneNo==false ? "*****" : data.phoneNo}</div>
              <div>Company Name : Newcompany</div>
              <div>Industry : Property Management</div>
              <div>Address : {data.address==false?"***": data.address}</div>
            </div>
          </div>
          <div className="lg:hidden block">
            <div className="flex flex-row items-center justify-between gap-0  Outfit font-normal md:text-[16px] text-[9px] leading-[25.2px] pt-6">
              <div>Email: {data.email}</div>
              <div>Phone No : +91 67885 57578</div>
            </div>
            <div className="flex flex-row items-center justify-between gap-0  Outfit font-normal md:text-[16px] text-[9px] leading-[25.2px] pt-2">
              <div>Company Name : Newcompany</div>
              <div>Industry : Property Management</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Author