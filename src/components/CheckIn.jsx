import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {BsCalendar} from "react-icons/bs";

export function CheckIn() {
  const [startDate, setStartDate] = useState(false);
  return (
    <div className=" relative flex items-center h-[70px] justify-end">
        <div className=" absolute z-10 pr-8">
            <div>
                <BsCalendar />
            </div>
        </div>
      <DatePicker
        className=" w-full h-[70px] pl-4"
        selected={startDate}
        placeholderText="chick in "
        onChange={(date) => setStartDate(date)}
        
      />
    </div>
  );
}
