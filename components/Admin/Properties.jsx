import React, { useEffect, useState } from 'react'
import {  GetStaticProps } from 'next'
import axios from 'axios';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { FavCard } from '@/components/Card/FavCard';
import { get } from 'http';



const Properties = () => {

    const [properties, setProperties] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(' http://52.0.126.140:3000/api/properties');
            console.log(response.data);
            setProperties(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }
    , []);
  
  return (
    <>
    
    
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {properties && properties.map((property) => (
            <FavCard key={property._id} price={property.price} content={property.details} place={property.location} title={property.name} picture={property.pictures[0]} _id={property._id} 
            />
        ))}
        { properties && properties.length === 0 &&  (
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
    </>
  )
}

export default Properties