import React, { useContext } from "react";
import { useParams } from "react-router";
import { CheckIn } from "../components/CheckIn";
import { CheckOut } from "../components/CheckOut";
import { AdultsDropdown } from "../components/AdultsDropdown";
import { KidsDropdown } from "../components/KidsDropdown";

import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";
function RoomDetails() {
  const { id } = useParams();
  const { rooms } = useContext(RoomContext);

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  const { name, description, facilities, imageLg, price } = room;
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${imageLg})` }}
        className={` bg-cover  h-[560px] bg-center relative flex justify-center items-center`}
      >
        <div className=" absolute w-full h-full bg-black/70"></div>
        <h1 className=" text-6xl text-white z-20 text-center font-mono">
          {name} Details
        </h1>
      </div>
      <div className=" container mx-auto">
        <div className=" flex flex-col lg:flex-row h-full py-24">
          <div className=" w-full h-full px-6 lg:w-[60%] ">
            <h2 className=" text-[32px] my-5">{name} </h2>
            <p className=" mb-8">{description} </p>
            <img src={imageLg} alt="" className=" mx-auto" />
            <div>
              <h3 className="text-[26px] py-5">Room Facilities</h3>
              <p className=" mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                doloremque sapiente dolor et autem esse animi! Qui fugit placeat
                tenetur nulla provident modi eos nesciunt sunt eaque ad, magni
                reiciendis!
              </p>
              <div className=" grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-x-4 flex-1"
                    >
                      <div className="text-[#a37b49]">{icon}</div>
                      <div className="text-[#a37b49]">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" w-full h-full lg:w-[40%] lg:mt-20">
            <div className=" py-8 px-6 bg-[#a5a09a] mb-12">
              <div className=" flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div>
                  <CheckIn />
                </div>
                <div>
                  <CheckOut />
                </div>
                <div className="h-[70px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[70px] mb-4">
                  <KidsDropdown />
                </div>
                <button className=" flex-1 py-4 text-xl rounded-md font-semibold bg-[#a37b49] hover:text-black   text-white hover:bg-[#ba9166] w-full      ">
                  book now for ${price}
                </button>
              </div>
            </div>
            <div>
              <h3>Hotel Rules</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti commodi laboriosam maiores natus suscipit, voluptas
                aperiam ea delectus voluptates, id dolorem fuga omnis.
                Consequuntur atque sed numquam voluptate temporibus iusto,
                aspernatur nihil eveniet saepe voluptates, at labore nemo
                maiores nobis.
              </p>
              <ul>
                <li className=" flex items-center gap-x-5 mt-7">
                    <FaCheck className="text-[#a37b49] " />
                    Check-in : 2:00 PM
                </li>
                <li className=" flex items-center gap-x-5 mt-7">
                    <FaCheck className="text-[#a37b49] " />
                    Check-out : 10:00 AM
                </li>
                <li className=" flex items-center gap-x-5 mt-7">
                    <FaCheck className="text-[#a37b49] " />
                    No Pets
                </li>
                <li className=" flex items-center gap-x-5 mt-7">
                    <FaCheck className="text-[#a37b49] " />
                    No smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomDetails;
