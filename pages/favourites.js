import { FavCard } from "@/components/Card/FavCard";
import FavCardData from "@/lib/FavCardData";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Favourites = () => {
  // write a code to get the user's favourites from the backend
  const [data, setData] = useState([]);
  const getFavourites = async () => {
    const token = document.cookie
      .split(";")
      .find((c) => c.includes("token"))
      .split("=")[1];
    const user = { value: token };
    // get favourites from backend
    const response = await axios.get(
      "http://localhost:3000/api/customers/favourites",
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = response.data;
    console.log(response);
    // const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <>
      <div className="lg:mt-[120px] mt-6 container mx-auto md:px-0 px-6">
        <Typography
          variant="h1"
          className="text-[#FFFFFF] Anton text-center lg:text-[40px] text-[26px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[60.13px] leading-3 py-4"
        >
          FAVOURITES
        </Typography>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-4 gap-2 mb-16">
          {data &&
            data.favourites &&
            data.favourites.map(
              (item) => (
                // console.log("item", item),
                // console.log("item.name", item.name),
                console.log("item.pictures", item.pictures),
                (
                  <FavCard
                    key={item._id}
                    name={item.name}
                    picture={item.pictures[0]}
                    content={item.details}
                    price={item.price}
                    place={item.location}
                    title={item.name}
                  />
                )
              )
            )}
        </div>
        {data && data.favourites && data.favourites.length === 0 && (
          <div className="flex justify-between pb-6 italic">
            <div></div>
            <div className="text-[30px]">No Favourites</div>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Favourites;
