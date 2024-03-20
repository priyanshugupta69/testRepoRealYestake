import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import {  GetStaticProps } from 'next'
import { CardDefault } from "../Card/Card";
import { toast } from "react-toastify";
import ViewAll from "../Buttons/ViewAll";

const CommericalPropSlider = () => {
    // Card
    const [cardItems, setCardItems] = useState([]);

    // getCardItems function api call with axios and ahndle error with taostify
    const getCardItems = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/properties/investment-cards?limit=9");
            setCardItems(res.data);
        }
        catch (err) {
            toast.error(err.response.data.msg);
        }
    }

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    getCardItems();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const getNoOfSlides = () => {
    console.log(windowWidth);
    return windowWidth >= 840 ? 3 : windowWidth < 840 && windowWidth >= 640 ? 2 : 1;
  };


  return (
    <>
      <main className="">
        <div className="flex justify-center items-center pt-10 pb-20">
          <h1 className="text-4xl Anton font-normal text-white">
           COMMERICAL INVESTMENT{" "}
            <span className="bg-gradient-to-r from-[#4440D2] to-[#C432E5] text-transparent text-4xl bg-clip-text">
              PROPERTIES
            </span>
          </h1>
        </div>
        <Swiper
          className="mb-20 w-11/12"
          spaceBetween={30}
          slidesPerView={getNoOfSlides()}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={index}>
              <CardDefault key={index} isNew="true" {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center pb-16">
          <ViewAll link="/properties/commerical-investment" title="VIEW All" />
        </div>
      </main>
    </>
  );
};

export default CommericalPropSlider;
