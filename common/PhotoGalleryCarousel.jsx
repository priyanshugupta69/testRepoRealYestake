import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import PropertyGalleryCard from '@/components/Property/PropertyGalleryCard';


const cardItems = [
    {
      title: "92 ALLIUM PLACE, ORLANDO FL 32827",
      place: "Ernakulam",
      content:
        "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
      price: "₹15.55L",
      isNew: true,
      isLiked: false
    },
    {
      title: "92 ALLIUM PLACE, ORLANDO FL 32827",
      place: "Ernakulam",
      content:
        "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
      price: "₹15.55L",
      isNew: true,
      isLiked: true
    },
    {
      title: "92 ALLIUM PLACE, ORLANDO FL 32827",
      place: "Ernakulam",
      content:
        "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
      price: "₹15.55L",
      isNew: false,
      isLiked: true
    },
    {
      title: "92 ALLIUM PLACE, ORLANDO FL 32827",
      place: "Ernakulam",
      content:
        "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
      price: "₹15.55L",
      isNew: false,
      isLiked: false
    },
    {
      title: "92 ALLIUM PLACE, ORLANDO FL 32827",
      place: "Ernakulam",
      content:
        "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
      price: "₹15.55L",
      isNew: true,
      isLiked: true
    },
    {
      title: "92 ALLIUM PLACE, ORLANDO FL 32827",
      place: "Ernakulam",
      content:
        "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
      price: "₹15.55L",
      isNew: true,
      isLiked: false
    },
    {
      title: "92 ALLIUM PLACE, ORLANDO FL 32827",
      place: "Ernakulam",
      content:
        "View at Casa Cochi: Where Modern Luxury Meets Colonial Charm Step into a haven of modern elegance in the heart of Fort Kochi. Casa Cochi, a boutique villa nestled amidst heritage streets, unveils its crown jewel...",
      price: "₹15.55L",
      isNew: false,
      isLiked: true
    }
  ]

const CustomCarousel = () => {

    const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
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
    return windowWidth >= 840 ? 5 : windowWidth < 840 && windowWidth >= 640 ? 2 : 1;
  };
  
  return (
    <div className="container mx-auto">
        <Swiper
        className=""
        spaceBetween={5}
        slidesPerView={getNoOfSlides()}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation = {true}
        modules={[Navigation]}
        >
        {
          cardItems.map((item, index) => (
            <SwiperSlide key={index} >
              <PropertyGalleryCard />
            </SwiperSlide>
          ))
        }
        </Swiper>
    </div>
  )
}

export default CustomCarousel