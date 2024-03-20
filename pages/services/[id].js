import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const result = await axios.get('http://localhost:3000/api/requests/services');
  const paths = result.data.map((property) => {
    return {
      params: { id: property._id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const result = await axios.get(`http://localhost:3000/api/requests/services/${id}`);
  return {
    props: {
      services: result.data
    }
  }
}

const ServiceSingle = ({services}) => {
  const router = useRouter()
  const [isBooked, setIsBooked] = React.useState("Book a Slot");

  const handleBookSlotBtn = async () => {
    if(isBooked === "Slot Booked"){
      // DONT CHANGE THE STATE AND DONT ALLOW TO BOOK AGAIN AND GIVE A MESSAGE SLOT IS ALREADY BOOKED
      alert('Slot Booked Already');
      return;
    }
    const serviceId = services[0]._id;
    try{
      if(document.cookie){
        const token = document.cookie.split(';').find(c => c.includes('token')).split('=')[1];
      const res = await axios.post("http://localhost:3000/api/requests/service-requests/", {
        serviceId
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      console.log('res', res);
      if(res.status === 200){
        alert('Slot Booked Successfully');
        setIsBooked("Slot Booked");
      }
      }
      else{
        router.push("/login")
      }
    }
    catch(error){
      console.log(error);
    }
  }
  console.log('services', services);
  return (
    <>
      {services && (
        <div className="container mx-auto px-6 lg:mt-[150px] lg:pb-12">
        <div className="md:mt-6 mt-8">
          <Typography
            variant="h1"
            className="text-[#FFFFFF] Anton text-center lg:text-[60px] md:text-[40px] text-[26px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[88.8px] leading-3"
          >
            SERVICES
          </Typography>
        </div>
        <div className="lg:mt-4 mt-6">
          <Typography
            variant="h1"
            className="text-[#FFFFFF] Anton text-left lg:text-[40px] md:text-[30px] text-[20px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[60.21px] leading-3"
          >
            {services[0].name}
          </Typography>
        </div>
        <div className="flex md:flex-row flex-col justify-start gap-6 lg:mt-3 mt-5 mb-8">
          <div className="md:w-[2030px] h-full ">
            <Image
              src={services[0].picture}
              alt="card-image"
              height={457}
              width={487}
            />
          </div>
          <div className="flex flex-col justify-start">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2   text-white/70"
            >
              <span className="font-bold text-white/90">Details: </span>
              A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
              {services[0].description}
            </Typography>
            <div className="lg:mt-4 mt:2 flex  justify-between items-end">
              <div>
                <Typography
                  variant="h3"
                  color="white"
                  className="mb-2  text-white lg:text-[16px] text-[14px]"
                >
                  Expected Price₹ 15.55 L
                </Typography>
              </div>
              <Button onClick={handleBookSlotBtn} color="blue" ripple="light">{isBooked}</Button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ServiceSingle;
