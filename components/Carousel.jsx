import { Carousel, IconButton } from "@material-tailwind/react";
export function CarouselCustom() {
  return (
    <div className="parent-div flex pr-24 pl-24 bg-[#120014] pb-32 pt-20">
      <Carousel
        className="lg:h-[45rem] md:h-[45rem] xl:h-[45rem] 2xl:h-[45rem] w-full relative rounded-3xl">
        <img
          src="/assets/image.png"
          alt="image 1"
          className="lg:h-[45rem] md:h-[45rem] xl:h-[45rem] 2xl:h-[45rem] w-full object-cover bg-[#20042A]"
        />
        <img
          src="/assets/image.png"
          alt="image 2"
          className="lg:h-[45rem] md:h-[45rem] xl:h-[45rem] 2xl:h-[45rem] w-full object-cover bg-[#20042A]"
        />
        <img
          src="/assets/image.png"
          alt="image 3"
          className="lg:h-[45rem] md:h-[45rem] xl:h-[45rem] 2xl:h-[45rem] w-full object-cover bg-[#20042A]"
        />
      </Carousel>
    </div>
  );
}