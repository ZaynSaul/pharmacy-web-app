import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@material-tailwind/react";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import React from "react";

const NavItem = ({ name, path, icon, isOpen }: any) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Link href={path}>
      <li
        className={`flex items-center justify-start text-white py-2 cursor-pointer  hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-900 hover:border-r-4 hover:border-blue-500 ${currentPath === path
          ? "bg-gradient-to-r from-blue-500 to-indigo-900 border-r-4 border-blue-500"
          : ""
          } `}
      >
        {isOpen ? (
          <>
            <div>
              <FontAwesomeIcon icon={icon} className={`w-16 text-xl ${isOpen ? "ml-4" : "ml-0"}`} />
            </div>
            <span>{name}</span>
          </>
        ) : (
          <Tooltip title={name} placement="right" content={name}>
            <div>
              <FontAwesomeIcon icon={icon} className={`w-16 text-xl ${isOpen ? "ml-4" : "ml-0"}`} />
            </div>
          </Tooltip>
        )}
      </li>
    </Link>
  );
};

export default NavItem;
