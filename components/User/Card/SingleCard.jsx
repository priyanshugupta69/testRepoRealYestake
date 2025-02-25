import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import ToggleButton from "@/components/Buttons/ToggleButton";
import PropCard from "./PropCard";
import { toast } from "react-toastify";


export function SingleCard({ name, location, details, price, isNew, isLiked, pictures, _id }) {
    // console.log(_id);

    const [transfer, setTransfer] = useState("Request for a transfer Request");
    const [deleteProp, setDeleteProp] = useState("Request for a Delete Property");
    const [edit, setEdit] = useState("Edit Property");

  const [liked, setLiked] = useState(isLiked);

  const handleFavourites = async () => {
    const token = document.cookie.split(';').find(c => c.includes('token')).split('=')[1];

    try {
      if (liked) {
        // If already liked, unfavorite the property
        await axios.put(`http://localhost:3000/api/properties/unfavourite/${_id}`, {}, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      } else {
        // If not liked, favorite the property
        const res = await axios.put(`http://localhost:3000/api/properties/favourite/${_id}`, {}, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      }

      console.log(res);

      // Update the liked state to reflect the current status
      setLiked(!liked);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  }

  const [token, setToken] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined" && document.cookie) {
      setToken(
        document.cookie
          .split(";")
          .find((c) => c.includes("token"))
          .split("=")[1]
      );
    }
  }, []);


  const handleEditBtn = async () => {
    if(edit==="Edit Request Sent!"){
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3000/api/requests/edit`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      console.log(response.data);
      setEdit("Edit Request Sent!");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleTransferBtn= async () => {
    if(transfer==="Transfer Request Sent!"){
      return;
    }
    console.log(token);
    try {
      const response = await fetch("http://localhost:3000/api/requests/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }, // Convert data to JSON string
      });

      console.log("Success:", response);

      if (response.status === 200) {
        toast.success("Request Sent!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTransfer("Transfer Request Sent!");
      } else {
        toast.error(error, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleDeleteBtn= async () => {
    if(deleteProp==="Delete Request Sent!"){
      return;
    }
    console.log(token);
    try {
      const response = await fetch("http://localhost:3000/api/requests/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }, 
      });

      console.log("Success:", response);

      if (response.status === 200) {
        toast.success("Request Sent!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setDeleteProp("Delete Request Sent!");
      } else {
        toast.error(error, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <Card className="mt-6 bg-[#0D0D0D] rounded-[8px]">
      <CardHeader floated={false}  className="relative m-0  rounded-none rounded-t-[8px]">
        <Link href={`/property/${_id}`}>
        <Image
          src={pictures[0]}
          alt="card-image"
          height={241}
          width={507}
          fullWidth={true}
          className="rounded-none rounded-t-[8px]"
        />
        </Link>
        {
          isNew ? (
            <div className='bg-[#FA238A] absolute top-3 left-3 w-12 text-white flex items-center justify-center rounded-md text-[12px] Outfit py-1 px-8'>
              <Typography variant='small'>NEW</Typography>
            </div>
          ) : ''
        }

<IconButton
    size="sm"
    variant="text"
    onClick={handleFavourites}
    className="!absolute top-1 right-1 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={liked ? 'red' : 'transparent'}
      stroke={liked ? 'red' : 'white'}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-red-500"
    >
      {/* ... your SVG path */}
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />

    </svg>
  </IconButton>
      </CardHeader>
      {/* <Link href={`/properties/${_id}`}> */}
      <CardBody className="px-2">

      
        <Typography variant="h6" color="blue-gray" className="mb-2 font-medium Outfit uppercase text-white text-[16px]">
          {name}
        </Typography>
        <Typography variant="small" color="white" className="flex mb-2 xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth={1} stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className=" text-white Outfit font-normal text-[12px] leading-[15.12px]">{location}</span>
        </Typography>
        <Typography variant="small" color="white" className="mb-2 text-white Outfit font-normal text-[12px] leading-[15.12px]">
          <span className="font-bold text-white">Details:  </span>
          {details.split(' ').slice(0, 8).join(' ') + '...'}
        </Typography>
        <div className="flex items-center justify-between pt-2 px-2">
        <Link href={`/properties/${_id}`}>
        <Typography className="text-[#F64070] text-[21px] font-[600] leading-[28px] Outfit" variant="h5">Rs. {price}</Typography>
        </Link>
        <Button onClick={handleEditBtn} className="rounded-[47px] Outfit hover:bg-[#F64070] hover:text-white bg-white text-[#F64070] text-[14px] font-normal capitalize leading-[17.64px] border border-[#FDACD3] px-10 py-[10px]">{edit}</Button>

        </div>
      </CardBody>
      {/* </Link> */}
      <CardFooter className="flex flex-col gap-4 justify-between pt-0 px-2" >
          <PropCard title1={'List for Sale'} title2={'Unlist'} _id={_id} />
          <Button onClick={handleTransferBtn} className="rounded-[47px] font-normal Outfit hover:bg-[#F64070] hover:text-white bg-white text-[#F64070] capitalize text-[14px]  leading-[17.64px] border border-[#FDACD3] px-10 py-[10px]">
            {transfer}
</Button>
<Button onClick={handleDeleteBtn} className="rounded-[47px] font-normal Outfit hover:bg-[#F64070] hover:text-white bg-white text-[#F64070] capitalize text-[14px]  leading-[17.64px] border border-[#FDACD3] px-10 py-[10px]">
            {deleteProp}
</Button>
      </CardFooter>
    </Card>
  );
}
