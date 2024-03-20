import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Typography } from '@material-tailwind/react';
export default function TinyCarousel() {

    const [windowWidth, setWindowWidth] = React.useState(0);
    React.useEffect(() => {
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
        return windowWidth >= 840 ? 4 : windowWidth < 840 && windowWidth >= 640 ? 2 : 1;
    };

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="#fff">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="#fff">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: getNoOfSlides(),
        slidesToScroll: getNoOfSlides(),
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    return (
        <Slider {...settings}>
            <div className='bg-[#1E1E1E] relative w-full h-[10rem] rounded-[10px] flex items-center justify-center'>
                <Typography color='white'>1</Typography>
                <div className='absolute top-0 right-0 bg-white rounded-full border-[#FD93C6] border w-5 h-5 justify-center items-center text-center flex'>
                    x
                </div>
            </div>
            <div className='bg-[#1E1E1E] relative w-full h-[10rem] rounded-[10px] flex items-center justify-center'>
                <Typography color='white'>2</Typography>
                <div className='absolute top-0 right-0 bg-white rounded-full border-[#FD93C6] border w-5 h-5 justify-center items-center text-center flex'>
                    x
                </div>
            </div>
            <div className='bg-[#1E1E1E] relative w-full h-[10rem] rounded-[10px] flex items-center justify-center'>
                <Typography color='white'>3</Typography>
                <div className='absolute top-0 right-0 bg-white rounded-full border-[#FD93C6] border w-5 h-5 justify-center items-center text-center flex'>
                    x
                </div>
            </div>
            <div className='bg-[#1E1E1E] relative w-full h-[10rem] rounded-[10px] flex items-center justify-center'>
                <Typography color='white'>4</Typography>
                <div className='absolute top-0 right-0 bg-white rounded-full border-[#FD93C6] border w-5 h-5 justify-center items-center text-center flex'>
                    x
                </div>
            </div>
            <div className='bg-[#1E1E1E] relative w-full h-[10rem] rounded-[10px] flex items-center justify-center'>
                <Typography color='white'>5</Typography>
                <div className='absolute top-0 right-0 bg-white rounded-full border-[#FD93C6] border w-5 h-5 justify-center items-center text-center flex'>
                    x
                </div>
            </div>
        </Slider>
    )
}
