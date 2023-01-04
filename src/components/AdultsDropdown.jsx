import React from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const list = [
  { name: "1 Adult" },
  { name: "2 Adult" },
  { name: "3 Adult" },
  { name: "4 Adult" },
];
export function AdultsDropdown() {
  return (
    <Menu as="div" className=' w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex  items-center justify-between px-8'>
        Adults
        <BsChevronDown />
      </Menu.Button>
      <Menu.Items as="ul" className=' bg-white absolute w-full flex flex-col z-40  ' >
        {list.map((li, index) => {
          return <Menu.Item as="li" className='border-b last-of-type:border-b-0 h-12 hover:bg-yellow-700 hover:text-white w-full justify-center items-center text-center cursor-pointer' key={index}>{li.name}</Menu.Item>;
        })}
      </Menu.Items>
    </Menu>

  );
}
