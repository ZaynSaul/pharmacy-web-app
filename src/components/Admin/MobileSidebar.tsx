import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {
  faPills,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link';
import { routes } from '../../utils/routes';

type Props = {
  showMobileSidebar: boolean;
  setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSidebar = (props: Props) => {
  const { showMobileSidebar, setShowMobileSidebar, } = props;
  return (
    <div
      className={`fixed left-0 top-0 w-full h-screen bg-black/70 z-50 cursor-pointer
        ${showMobileSidebar ? "md:hidden" : "block"}`}
    >
      <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:h-[45%] h-screen transition--smooth bg-gradient-to-r from-[#0F172A] to-[#193152] p-8 ease-in duration-500">
        <div className="flex w-full  flex-row justify-between items-center">
          <div className="flex space-x-2 cursor-pointer">
            <FontAwesomeIcon icon={faPills} size="2x" className="text-orange-500" />
            <a href="#" className="font-extrabold font-nunito text-xl text-white">
              harma
            </a>
          </div>
          <div
            onClick={() => setShowMobileSidebar(false)}
            className="flex justify-center items-center rounded-full shadow-lg w-[40px] h-[40px] cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-2xl text-gray-500"
            />
          </div>
        </div>
        <div className="border-b border-white my-6"></div>
        <ul className="flex flex-col">
          {routes.map((route) => {
            return <Link href={route.name} key={route.name}>
              <li
                onClick={() => setShowMobileSidebar(false)}
                className="my-2 cursor-pointer"
              >
                <a href="#" className="text-white flex items-center">
                  <FontAwesomeIcon
                    icon={route.icon}
                    className="text-xl mr-4 w-[30px]"
                  />
                  <span>{route.name}</span>
                </a>
              </li>
            </Link>
          })}
        </ul>

      </div>
    </div>
  )
}

export default MobileSidebar
