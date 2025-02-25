import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

export function CardDefault({ name, location, details, price, isNew, isLiked, pictures, _id }) {

  const [params, setParams] = useState({
    fillNone: true,
    color: 'none',
    stroke: 'white',
    fill: 'transparent',
  });

  const changeColour = () => {
    params.fillNone ? setParams({
      fillNone: false,
      color: 'red',
      stroke: 'none',
      fill: 'red',
    }) : setParams({
      fillNone: true,
      color: 'none',
      stroke: 'white',
      fill: 'transparent',
    })
  }

  const handleChangeColour = async () => {
    const token = document.cookie.split(';').find(c=>c.includes('token')).split('=')[1];
    // get favourites from backend
    console.log('token', token);
    console.log('id', _id);
    const response = await axios.put(`http://localhost:3000/api/properties/favourite/${_id}`, {
  },{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    
    const result = response.data;
    // const result = await response.json();
    
    console.log(result);
  }

  return (
    <Card className="mt-6  rounded-sm bg-[#220526]" key={_id}>
      <CardHeader floated={false}  className="relative m-0 rounded-sm">
        <img
          src={pictures}
          alt="card-image"
        />
        {
          isNew ? (
            <div className='bg-[#FA238A] absolute top-3 left-3 w-12 text-white flex items-center justify-center rounded-md'>
              <Typography variant='small'>NEW</Typography>
            </div>
          ) : ''
        }

        <IconButton
          size="sm"
          variant="text"
          className="!absolute top-1 right-1 rounded-full"
          onClick={handleChangeColour}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={
              isLiked ? 'red': 'transparent'
            }
            stroke={
              isLiked ? 'red': 'white'
            }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-red-500 fill-`${params.fill}`"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2 xl  text-white">
          {name}
        </Typography>
        <Typography variant="small" color="blue-gray" className="flex mb-2 xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="font-bold  text-white/70">{location}</span>
        </Typography>
        <Typography variant="small" color="blue-gray" className="mb-2 xl  text-white/70">
          <span className="font-bold text-white/70">Details:  </span>
          {details.split(' ').slice(0, 10).join(' ') + '...'}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between pt-0">
        <Typography className="text-[#F64070]" variant="h5">Rs. {price}</Typography>
        <Button className="rounded-full hover:bg-[#F64070] hover:text-white bg-white text-[#F64070] border border-[#FDACD3]">Enquire Now</Button>
      </CardFooter>
    </Card>
  );
}