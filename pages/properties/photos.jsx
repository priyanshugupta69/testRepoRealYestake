import CustomCarousel from "@/common/PhotoGalleryCarousel";
import Image from "next/image";
import React, { useState } from "react";



const Photos = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-1 w-full">
          <div className="">
            <Image
              src="/assets/pexels-binyamin-mellish-186077.jpg"
              alt={`current Image ${currentPhotoIndex + 1}`}
              // fill={true}
              width={1224}
              height={599}
              className=" items-center justify-center  rounded-[16px]"
            />
          </div>
        </div>
        <div className="container mx-auto">
          <CustomCarousel />
        </div>


      </div>
    </>
  );
};

export default Photos;
