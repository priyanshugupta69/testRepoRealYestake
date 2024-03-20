import React, { useEffect, useState } from 'react'
import {  GetStaticProps } from 'next'
import axios from 'axios';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { FavCard } from '@/components/Card/FavCard';
import { get } from 'http';

// complete data 
export const getStaticProps = async () => {
  try{
    const result = await axios.get('http://localhost:3000/api/properties');
  
  return {
    props: {
      properties: result.data,
    }
  }
  }
  catch(error){
    return {
      props: {
        properties: null,
      }
    }
  
  }
}

const index = ({properties}) => {
  const [userProfile, setUserProfile] = useState([]);

  
  return (
    <>
    
    <div className='container mx-auto lg:mt-[140px] lg:mb-16'>
    <Typography
        variant="h1"
        className="text-[#FFFFFF] Anton text-center lg:text-[40px] text-[26px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[60.13px] leading-3 py-4"
      >
        PROPERTIES
      </Typography>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {properties && properties.map((property) => (
            <FavCard key={property._id} price={property.price} content={property.details} place={property.location} title={property.name} picture={property.pictures[0]} _id={property._id} 
            isLiked={
              userProfile && userProfile.favourites && userProfile.favourites.includes(property._id)
            }/>
        ))}
        {properties &&
          properties.length === 0 && (
            <div className="text-center text-[#FFFFFF] text-lg">No properties found</div>
          )
        }
        {/* if api is not reachable */}
        {
          properties === null && (
            <div className="text-center text-[#FFFFFF] text-lg">Server Error</div>
          )
        }

      </div>
    </div>
    </>
  )
}

export default index