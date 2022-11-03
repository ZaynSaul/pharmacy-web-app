import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faBell,
  faCalendarAlt,
  faChevronDown,
  faComments,
  faCogs,
  faRightToBracket,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,

} from "@material-tailwind/react";

import Logout from "../Logout";

export default function TopBar({ showMobileSidebar, setShowMobileSidebar }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[60px] p-2 text-gray-800 bg-white flex flex-row items-center justify-between border-none px-8 shadow-sm">
      <div className="flex items-center appearance-none border border-[#193152] rounded w-[300px]">
        <Tooltip title="search" placement="left" content="Search">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-lg w-12 cursor-pointer text-[#193152]"
          />
        </Tooltip>
        <input
          className="bg-transparent text-gray rounded outline-none border-none focus:outline-none focus:shadow-outline  py-2 w-full"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className=" justify-center items-center  gap-4 hidden md:flex">
        <ul className="flex justify-center items-center  gap-4">
          <Tooltip content="Calendar">
            <li className="relative flex items-center justify-center w-7 h-7 text-[#193152] hover:text-white hover:bg-[#193152] hover:rounded-full transition-all">
              <span>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-lg cursor-pointer  "
                />
              </span>
              <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
            </li>
          </Tooltip>
          <Tooltip content="Messages">
            <li className="relative flex items-center justify-center w-7 h-7 text-[#193152] hover:text-white hover:bg-[#193152] hover:rounded-full transition-all">
              <span>
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-lg  cursor-pointer"
                />
              </span>
              <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
            </li>
          </Tooltip>
          <Tooltip content="Notification">
            <li className="relative flex items-center justify-center w-7 h-7 text-[#193152] hover:text-white hover:bg-[#193152] hover:rounded-full transition-all">
              <span>
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-lg cursor-pointer"
                />
              </span>
              <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
            </li>
          </Tooltip>
        </ul>
        <Menu>
          <Tooltip content="Settings">
            <MenuHandler>
              <div className="flex items-center justify-center gap-2 cursor-pointer font-nunito">
                <Avatar
                  src="/images/profile.jpg"
                  alt="profile"
                  variant="circular"
                  size="sm"
                  className="border border-gray-300"
                />
                <p className="text-sm ">John Doe</p>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-lg cursor-pointer text-[#193152]"
                />
              </div>
            </MenuHandler>
          </Tooltip>
          <MenuList>
            <MenuItem>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Profile
            </MenuItem>
            <MenuItem>
              <FontAwesomeIcon icon={faCogs} className="mr-2" />
              Settings
            </MenuItem>
            <MenuItem onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div
        onClick={() =>
          showMobileSidebar ? setShowMobileSidebar(false) : setShowMobileSidebar(true)
        }
        className="block md:hidden"
      >
        <Tooltip title="Toggle" placement="top" content="Toggle">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl w-12 cursor-pointer text-[#193152]"
          />
        </Tooltip>
      </div>
      <Logout isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
