import React from "react";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
export const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className=" bg-white shadow-2xl min-h-[500px] group ">
      <div className=" overflow-hidden ">
        <img
          className=" group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt="asd"
        />
      </div>
      <div className=" bg-white shadow-lg max-w-[350px]
       mx-auto h-[60px] -translate-y-1/2 flex justify-center  
        items-center uppercase font-tertiary  tracking-[1px] 
        font-semibold text-base">
        <div className="flex justify-between w-[80%]">
            <div className=" flex items-center gap-x-1">
                <div className="text-accent">
                    <BsArrowsFullscreen className="text-[13px]" />
                </div>
                <div className="flex gap-x-1">
                    <div>size</div>
                    <div>{size}m2</div>
                </div>
            </div>
            <div className=" flex items-center gap-x-1">
                <div className="text-accent">
                    <BsPeople className="text-[15px]" />
                </div>
                <div className="flex gap-x-1">
                    <div>max people</div>
                    <div>{maxPerson}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
