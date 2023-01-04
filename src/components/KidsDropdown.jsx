// export function KidsDropdown(){

//     return(
//         <div>
//             KidsDropdown
//         </div>
//     )
// }

import React from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const list = [
  { name: "0 Kids" },
  { name: "1 Kids" },
  { name: "2 Kids" },
  { name: "3 Kids" },
];
export function KidsDropdown() {
  return (
    <Menu as="div" className=" w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex  items-center justify-between px-8">
        Kids
        <BsChevronDown />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className=" bg-white absolute w-full flex flex-col z-40  "
      >
        {list.map((li, index) => {
          return (
            <Menu.Item
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-yellow-700 hover:text-white w-full justify-center items-center text-center cursor-pointer"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
