import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {
  faShop,
  faPills,
  faUserAlt,
  faUserCog,
  faDashboard,
  faUserFriends,
  faHandHoldingMedical,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const MobileSidebar = ({ setShowMobileSidebar }: any) => {
  return (
    <div
      className={`fixed left-0 top-0 w-full h-screen bg-black/70 z-50 cursor-pointer
        ${setShowMobileSidebar ? "md:hidden" : "block"}`}
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
          <Link href="/admin">
            <li
              onClick={() => setShowMobileSidebar(false)}
              className="my-2 cursor-pointer"
            >
              <a href="#" className="text-white flex items-center">
                <FontAwesomeIcon
                  icon={faDashboard}
                  className="text-xl mr-4 w-[30px]"
                />
                <span>Dashboard</span>
              </a>
            </li>
          </Link>
          <Link href="/admin/patients">
            <li
              onClick={() => setShowMobileSidebar(false)}
              className="my-2 cursor-pointer"
            >
              <a className="text-white flex items-center">
                <FontAwesomeIcon
                  icon={faShop}
                  className="text-xl mr-4 w-[30px]"
                />
                <span>Purchase</span>
              </a>
            </li>
          </Link>
          <li
            onClick={() => setShowMobileSidebar(false)}
            className="my-2 cursor-pointer"
          >
            <a className="text-white flex items-center">
              <FontAwesomeIcon
                icon={faHandHoldingMedical}
                className="text-xl mr-4 w-[30px]"
              />
              <span>Product</span>
            </a>
          </li>
          <li
            onClick={() => setShowMobileSidebar(false)}
            className="my-2 cursor-pointer"
          >
            <a className="text-white flex items-center">
              <FontAwesomeIcon
                icon={faUserFriends}
                className="text-lx mr-4 w-[30px]"
              />
              <span>Employees</span>
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default MobileSidebar
