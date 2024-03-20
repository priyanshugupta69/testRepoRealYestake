import React, { useEffect, useState } from 'react'
import RequestCard from '../RequestCards/RequestCard';
import RequestCardMobile from '../RequestCards/RequestCardMobile';
import axios from "axios";


const RequestData = [
  {
    name: "Tania Andrew",
    title: "Requesting Transfer of the Property",
    property: "4140 Parker Rd. Allentown, New Mexico 31134",
    to: "Hanry Porter",
    time: "15 May 2020 9:00 am",
  },
];

const Service = () => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    let token = "";
    if (typeof window !== "undefined") {
      token = document.cookie
        .split(";")
        .find((c) => c.includes("token"))
        .split("=")[1];
    }
    getData(token);

  }, []);

  const getData = async (token) => {
    try {
      const user = await axios.get(
        "http://localhost:3000/api/requests/service-requests",
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = user.data;
      setRequests(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("service", requests && requests.length>0 && requests)


  return (
    <div>
          <div className="my-11 lg:block hidden">
            {requests &&
              requests.length > 0 &&
              requests.map((data, index) => (
                <RequestCard
                  key={index}
                  userProfileId={data.customerId._id}
                  title={data.serviceId.name}
                  name="Requesting for a service"
                  date={data.date.split("T")[0]}
                  time={new Date(data.date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                />
              ))}
            {requests && requests.length === 0 && (
              <div className="text-center text-[#FFFFFF] text-lg">
                No requests found
              </div>
            )}
            {requests === undefined && (
              <div className="text-center text-[#FFFFFF] text-lg">
                Server Error
              </div>
            )}
          </div>

          <div className="lg:hidden block">
            {requests &&
              requests.length > 0 &&
              requests.map((data, index) => (
              <RequestCardMobile
                key={index}
                userProfileId={data.customerId._id}
                title={data.serviceId.name}
                date={data.date.split("T")[0]}
                  time={new Date(data.date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
              />
            ))}
          </div>
        </div>
  )
}

export default Service