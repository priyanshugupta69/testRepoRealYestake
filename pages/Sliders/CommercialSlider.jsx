"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardDefault } from "@/components/Card";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import ViewAll from "@/components/Button/ViewAll";

const cardItems = [
  {
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    place: "Ernakulam",
    content:
      "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
    price: "₹15.55L",
    isNew: true,
    isLiked: false,
  },
  {
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    place: "Ernakulam",
    content:
      "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
    price: "₹15.55L",
    isNew: true,
    isLiked: true,
  },
  {
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    place: "Ernakulam",
    content:
      "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
    price: "₹15.55L",
    isNew: false,
    isLiked: true,
  },
  {
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    place: "Ernakulam",
    content:
      "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
    price: "₹15.55L",
    isNew: false,
    isLiked: false,
  },
  {
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    place: "Ernakulam",
    content:
      "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
    price: "₹15.55L",
    isNew: true,
    isLiked: true,
  },
  {
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    place: "Ernakulam",
    content:
      "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
    price: "₹15.55L",
    isNew: true,
    isLiked: false,
  },
  {
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    place: "Ernakulam",
    content:
      "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
    price: "₹15.55L",
    isNew: false,
    isLiked: true,
  },
];

const url = "https://jsonplaceholder.typicode.com/todos/1";

const CommericalSlider = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getNoOfSlides = () => {
    return windowWidth >= 840
      ? 3
      : windowWidth < 840 && windowWidth >= 640
      ? 2
      : 1;
  };

  const [items, setItems] = useState([]);
  // axios call with error as toasts , amke it function using axios
  const getItems = async () => {
    try {
      const response = await axios.get(url);
      setItems(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center pt-10 pb-10">
        <h1 className="text-4xl font-anton font-normal text-white">
        COMMERICAL INVESTMENT{" "}
          <span className="bg-gradient-to-r from-[#4440D2] to-[#C432E5] text-transparent text-4xl bg-clip-text">
            PROPERTIES
          </span>
        </h1>
      </div>
      <Swiper
        className="mb-12 w-11/12"
        spaceBetween={30}
        slidesPerView={getNoOfSlides()}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
      >
        {cardItems.map((item, index) => (
          <SwiperSlide key={index}>
            <CardDefault key={index} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center pb-16">
        <ViewAll />
      </div>
    </>
  );
};

export default CommericalSlider;
