import React, { useEffect, useState } from 'react'
import RequestCard from '../RequestCards/RequestCard';
import RequestCardMobile from '../RequestCards/RequestCardMobile';
import axios from "axios";
import UnRequestCard from '../RequestCards/UnRequestCard';
import Link from 'next/link';


const Demo = () => {

  const [requests, setRequests] = useState([]);
  const [demoRequests, setDemoRequests] = useState([]);
  const [unregUsers, setUnregUsers] = useState([]);

  useEffect(() => {
    let token = "";
    if (typeof window !== "undefined") {
      token = document.cookie
        .split(";")
        .find((c) => c.includes("token"))
        .split("=")[1];
    }
    // getData(token);
    getDemoData(token);

  }, []);

  // const getData = async (token) => {
  //   try {
  //     const user = await axios.get(
  //       "http://localhost:3000/api/requests/demo",
  //       {
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     const result = user.data;
  //     setRequests(result);
  //     console.log("demo", result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getDemoData = async (token) => {
    try {
      const user = await axios.get(
        "http://localhost:3000/api/requests/demo",
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = user.data;
      setDemoRequests(result.regUsers);
      setUnregUsers(result.unregUsers);
      console.log("demo", result.regUsers);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    
      <div className='my-11'>
          <div className="lg:block hidden">
            {demoRequests &&
              demoRequests.length > 0 &&
              demoRequests.map((data, index) => (
                <Link href={`/admin/requests/demo/${data._id}`}>
                  <RequestCard
                  key={index}
                  userProfileId={data.customer}
                  name="Requesting for a demo"
                  title={data._id}
                  date={data.date.split("T")[0]}
                  time={new Date(data.date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                />
                </Link>
              ))}
            {demoRequests && demoRequests.length === 0 && (
              <div className="text-center text-[#FFFFFF] text-lg">
                No requests found
              </div>
            )}
            {demoRequests === undefined && (
              <div className="text-center text-[#FFFFFF] text-lg">
                Server Error
              </div>
            )}
          </div>

          <div className="lg:hidden block">
            {demoRequests &&
              demoRequests.length > 0 &&
              demoRequests.map((data, index) => (
              <RequestCardMobile
                key={index}
                  userProfileId={data.customer}
                  name="Requesting for a demo"
                  title={data._id}
                  date={data.date.split("T")[0]}
                  time={new Date(data.date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
              />
            ))}
          </div>

          {/* for unregestered users */}
          <div className="lg:block hidden">
            {unregUsers &&
              unregUsers.length > 0 &&
              unregUsers.map((data, index) => (
                <Link href={`/admin/requests/demo/${data._id}`}>
                  <UnRequestCard
                  key={index}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  name="Requesting for a demo"
                  title={data._id}
                  date={data.date.split("T")[0]}
                  time={new Date(data.date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                />
                </Link>
              ))}
            {(unregUsers && unregUsers.length === 0)||(demoRequests && demoRequests.length === 0 ) && (
              <div className="text-center text-[#FFFFFF] text-lg">
                No requests found
              </div>
            )}
            {(unregUsers === undefined) || (demoRequests === undefined) && (
              <div className="text-center text-[#FFFFFF] text-lg">
                Server Error
              </div>
            )}
          </div>

          {/* for unreq user mobile view */}
          <div className="lg:hidden block">
            {unregUsers &&
              unregUsers.length > 0 &&
              unregUsers.map((data, index) => (
              <RequestCardMobile
                key={index}
                  userProfileId={data.customer}
                  name="Requesting for a demo"
                  title={data._id}
                  date={data.date.split("T")[0]}
                  time={new Date(data.date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
              />
            ))}
            {(unregUsers && unregUsers.length === 0)||(demoRequests && demoRequests.length === 0 ) && (
              <div className="text-center text-[#FFFFFF] text-lg">
                No requests found
              </div>
            )}
            {(unregUsers === undefined) || (demoRequests === undefined) && (
              <div className="text-center text-[#FFFFFF] text-lg">
                Server Error
              </div>
            )}
            </div>
        </div>
    
  )
}

export default Demo