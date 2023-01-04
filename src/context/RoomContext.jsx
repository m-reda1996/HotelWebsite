import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";
export const RoomContext = createContext();
const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  console.log(`${total} ad ${adults} ki ${kids}`);
  return <RoomContext.Provider value={rooms}>{children}</RoomContext.Provider>;
};

export default RoomProvider;
