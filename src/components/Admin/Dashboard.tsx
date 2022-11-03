import React from 'react';

import {
  faBuilding,
  faDashboard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from '../Breadcrumb';

import Stats from './Stats';

import ChartComponent from '../Charts/ChartComponent';

import Calender from '../Calendar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {

  return (
    <>
      <div className=' w-full p-4'>
        <Breadcrumb icon={faDashboard} pageName='Dashboard' />
        <Stats />
        <div className='w-full flex flex-col flex-nowrap items-center  gap-4 mt-4 md:flex-row'>
          <div className='w-full mb-4 md:mb-0 md:w-2/3 h-[376px]  bg-white rounded-md'>
            <ChartComponent />
          </div>
          <div className='w-full md:w-1/3 h-[376px]'>
            <Calender />
          </div>
        </div>
        <div className="w-full bg-white p-4 mt-4 shadow-sm font-nunito rounded-md">
          <h2 className='text-[#193152] font-extrabold text-lg'>Recent Clients</h2>
          <div className='border-b border-gray-300 my-4'></div>
          <div className='flex flex-row items-center justify-between text-lg'>
            <div className='flex items-center justify-center gap-4'>
              <div className='w-10 h-10 bg-[#193152] rounded-full flex items-center justify-center'>
                <FontAwesomeIcon icon={faEnvelope} className='text-white text-lg ' />
              </div>
              <p>John Doe</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faBuilding} className='text-xl text-[#193152]' />
              <p>,Address</p>
            </div>
            <div>
              <p>Region</p>
            </div>
            <div>
              <p>Status</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
