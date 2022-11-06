import React from 'react'
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,

} from "@material-tailwind/react";
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

const TopProfileLink = ({ setIsOpen }: any) => {
  return (
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
  )
}

export default TopProfileLink
