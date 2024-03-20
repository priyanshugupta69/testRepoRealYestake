import React, { useEffect, useState } from 'react'
import {  GetStaticProps } from 'next'
import axios from 'axios';
import { Typography } from '@material-tailwind/react';
import { FavCard } from '@/components/Card/FavCard';


export const getStaticProps = async () => {

  
    const result = await axios.get('http://localhost:3000/api/properties/investment');
    
    return {
      props: {
        properties: result.data,
      }
    }
}

const index = ({properties}) => {

    const [userProfile, setUserProfile] = useState([]);
  
  useEffect(() => {
    let token ="";
    if (typeof window !== "undefined") {
      token = document.cookie.split(';').find(c=>c.includes('token')).split('=')[1];
    }
    
    getData(token);
    
  }, []);

  const getData = async (token) => {
    try{
      console.log('tokehhhhhn', token);
      const user = await axios.get(
        "http://localhost:3000/api/customers/user-profile",
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = user.data;
      console.log(result);
      setUserProfile(result);
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div className='container mx-auto lg:mt-[140px] lg:mb-16'>
    <Typography
        variant="h1"
        className="text-[#FFFFFF] Anton text-center lg:text-[40px] text-[26px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[60.13px] leading-3 py-4"
      >
        COMMERICAL INVESTMENT PROPERTIES
      </Typography>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {properties && properties.map((property) => (
            <FavCard key={property._id} price={property.price} content={property.details} place={property.location} title={property.name} picture={property.pictures[0]} _id={property._id} 
            isLiked={
              userProfile && userProfile.favourites && userProfile.favourites.includes(property._id)? true : false
            }/>
        ))}
        {
          properties.length === 0 && (
            <div className="text-center text-[#FFFFFF] text-lg">No properties found</div>
          )
        }
        {/* if api is not reachable */}
        {
          properties === undefined && (
            <div className="text-center text-[#FFFFFF] text-lg">Server Error</div>
          )
        }

      </div>
    </div>
  )
}

export default index