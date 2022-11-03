import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


export default function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className='bg-white rounded mb-4'>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className='w-full h-[80px] flex justify-center items-center text-white font-nunito bg-gradient-to-r from-[#0F172A] to-[#193152] rounded-md'>
          <p>Selected date: {" "} </p><span className='text-blue-500 text-sm ml-1'> {value.toDateString()}</span> 
      </div>
    </>
  );
}