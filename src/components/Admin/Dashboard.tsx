import React from 'react';

import {
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";

import Breadcrumb from '../Breadcrumb';
import Stats from './Stats';
import ChartComponent from '../Charts/ChartComponent';
import Calender from '../Calendar';

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
      </div>
    </>
  )
}
