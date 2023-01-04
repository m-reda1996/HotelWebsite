import React from "react";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
export const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className=" bg-white shadow-2xl min-h-[500px] group ">
      <div className=" overflow-hidden ">
        <img
          className=" hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt="asd"
        />
      </div>
      <div
        className=" bg-white shadow-lg max-w-[350px]
       mx-auto h-[60px] -translate-y-1/2 flex justify-center  
        items-center uppercase font-tertiary  tracking-[1px] 
        font-semibold text-base"
      >
        <div className="flex justify-between w-[85%]">
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
      <div className=" text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name} </h3>
        </Link>
        <p>{description.slice(0, 56)} </p>
      </div>
      <div className=" mt-7 mx-auto ">
        <Link to={`/room/${id}`} className=" text-center block text-sm font-semibold py-3 px-4  max-w-[220px] mx-auto hover:text-black hover:bg-[#f3d4ad] text-white bg-[#a37b49]">
          book now from ${price}           
        </Link>
      </div>
    </div>
  );
};
