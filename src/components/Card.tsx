import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ icon, bIcon, count, text }: any) {

  return (
    <div className='p-4 md:max-w-sm w-full md:flex-1 bg-white rounded-md border-r-4 border-[#193152] shadow-sm 
      cursor-pointer hover:scale-105 ease-in duration-300'>
      <div className='flex justify-between items-center '>
        <div className='w-10 h-10 flex items-center justify-center shadow-lg bg-[#193152] rounded-full
             cursor-pointer hover:scale-105 ease-in duration-300'>
          <FontAwesomeIcon icon={icon} className='text-lg text-white' />
        </div>
        <p className='text-lg text-[#193152] font-bold'>{count}</p>
      </div>
      <a href='#'>
        <h5 className='mb-2 text-ms font-semibold tracking-tight text-[#193152]'>{text}</h5>
      </a>
      <a href='#' className='inline-flex items-center text-blue-600 hover:underline'>
        View More
        <FontAwesomeIcon icon={bIcon} className='ml-4' />
      </a>
    </div>
  )
}
