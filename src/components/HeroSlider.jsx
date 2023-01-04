import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "your  lucury hotel for you ",
    bg: Img1,
    btnText: "Room & suites",
  },
  {
    title: "your  lucury hotel  you ",
    bg: Img2,
    btnText: " suites",
  },
  {
    title: "your  lucury  ",
    bg: Img3,
    btnText: "Room",
  },
];

export function HeroSlider() {
  return (
    <Swiper effect="fade" modules={[EffectFade,Autoplay]} loop = {true} autoplay={{
        delay : 3000,
        disableOnInteraction : false
    }} className=" h-[600px] lg:h-[860px]">
      {slides.map((slides, el) => {
        const { title, bg, btnText } = slides;
        return (
          <SwiperSlide
            key={el}
            className=" bg-slate-300 relative flex justify-center items-center"
          >
            <div className=" z-20 text-white text-center">
              <div className=" uppercase tracking-[10px]">
                {" "}
                just enjoy and relax{" "}
              </div>
              <h1 className="text-[32px] uppercase tracking-[3px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <button className=" h-[55px]  text-xl text-center block font-semibold hover:text-black hover:bg-[#f3d4ad] text-white bg-[#a37b49] w-full lg:min-w-[220px]  lg:mt-0  lg:max-w-[250px] mx-auto ">{btnText}</button>
            </div>
            <div className=" absolute top-0 w-full h-full">
              <img src={bg} alt="" className=" object-cover h-full w-full" />
            </div>
            <div className=" absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
