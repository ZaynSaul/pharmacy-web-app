import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
  Tooltip,
} from "@material-tailwind/react";

import Logout from "../Logout";
import TopProfileLink from "../Links/TopProfileLink";
import TopLink from "../Links/TopLink";
import SearchInput from "../SearchInput";

type Props = {
  showMobileSidebar: boolean;
  setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopBar(props: Props) {
  const { showMobileSidebar, setShowMobileSidebar } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[60px] p-2 text-gray-800 bg-white flex flex-row items-center justify-between border-none px-8 shadow-sm">
      <SearchInput />
      <div className=" justify-center items-center  gap-4 hidden md:flex">
        <TopLink />
        <TopProfileLink setIsOpen={setIsOpen} />
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
