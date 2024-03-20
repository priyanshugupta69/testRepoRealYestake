import CustomCarousel from '@/common/VideoCarousel';
import React, { useState } from 'react'
import YouTube from "react-youtube"; 

const Videos = () => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };


  const opts = { 
    width: '100%',
    height: '499',
    borderRadius: '16px',
    playerVars: { 
      autoplay: 1, 
    }, 
  }; 

  

  const _onReady =(event)=>{
        event.target.pauseVideo();  
  }

  return (
    <>
        <section className="container mx-auto mt-30">
        <div className="grid md:grid-cols-1 w-full">
          <div className="w-full rounded-[16px]">
            <YouTube videoId="sTnm5jvjgjM" 
            opts={opts} onReady={_onReady}
            className='rounded-[16px]'
             /> 
          </div>
        </div>
        <div className="container mx-auto  ">
          <CustomCarousel />
        </div>
      </section>
    </>
  )
}

export default Videos