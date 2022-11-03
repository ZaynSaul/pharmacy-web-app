import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPills,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import { useRouter } from "next/router";

import { Tooltip } from "@material-tailwind/react";

import { routes, settingRoutes } from "../../utils/routes";

export default function Sidebar({ isOpen, setIsOpen, children }: any) {
  const router = useRouter();
  const current = router.pathname;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.div
      animate={{ width: isOpen ? "200px" : "60px" }}
      className="hidden h-screen fixed left-0 top-0 transition--smooth bg-gradient-to-r from-[#0F172A] to-[#193152] md:block"
    >
      <div
        className={`text-white font-nunito font-extrabold ml-8 mt-4 ${isOpen ? "ml-8" : "ml-4"
          }`}
      >
        <FontAwesomeIcon icon={faPills} size="2x" className="text-orange-500" />
        {isOpen && <span className="text-xl text-white  ml-2">harma</span>}
      </div>
      <div className="border-b border-white my-6"></div>
      <div className="font-nunito mt-8">
        <ul className="flex flex-col gap-2">
          {routes.map((route) => {

            return <Link href={route.path} key={route.name}>
              <li
                className={`flex items-center justify-start text-white  py-2 cursor-pointer  hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-900 hover:border-r-4 hover:border-blue-500 ${current === route.path
                  ? "bg-gradient-to-r from-blue-500 to-indigo-900 border-r-4 border-blue-500"
                  : ""
                  }`}
              >
                {isOpen ? (
                  <>
                    <FontAwesomeIcon
                      icon={route.icon}
                      className={`w-16 text-xl ${isOpen ? "ml-4" : "ml-0"}`}
                    />
                    <span>{route.name}</span>
                  </>
                ) : (
                  <Tooltip
                    title={route.name}
                    placement="right"
                    content={route.name}
                  >
                    <FontAwesomeIcon
                      icon={route.icon}
                      className={`w-16 text-xl ${isOpen ? "ml-4" : "ml-0"}`}
                    />
                  </Tooltip>
                )}
              </li>
            </Link>
          })}
        </ul>
      </div>
      {isOpen && (
        <p className="mt-6 ml-4 text-white font-nunito font-bold">SETTINGS</p>
      )}
      <div className="border-b border-white mb-2"></div>
      <div className="font-nunito">
        <ul className="flex flex-col gap-2">
          {settingRoutes.map((route) => {

            return <Link href={route.path} key={route.name}>
              <li
                className={`flex items-center justify-start text-white  py-2 cursor-pointer  hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-900 hover:border-r-4 hover:border-blue-500 ${current === route.path
                  ? "bg-gradient-to-r from-blue-500 to-indigo-900 border-r-4 border-blue-500"
                  : ""
                  }`}
              >
                {isOpen ? (
                  <>
                    <FontAwesomeIcon
                      icon={route.icon}
                      className={`w-16 text-xl ${isOpen ? "ml-4" : "ml-0"}`}
                    />
                    <span>{route.name}</span>
                  </>
                ) : (
                  <Tooltip
                    title={route.name}
                    placement="right"
                    content={route.name}
                  >
                    <FontAwesomeIcon
                      icon={route.icon}
                      className={`w-16 text-xl ${isOpen ? "ml-4" : "ml-0"}`}
                    />
                  </Tooltip>
                )}
              </li>
            </Link>
          })}
        </ul>
      </div>
      <motion.div
        onClick={toggle}
        className={`absolute top-16 text-black cursor-pointer hover:scale-105 ease-in duration-500 w-[50px] h-[30px] bg-white rounded-2xl
      flex items-center justify-center ${isOpen ? "right-0" : "right-1"}`}
      >
        <Tooltip content="Toggle">
          {isOpen ? (
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="text-2xl text-[#193152]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="text-2xl text-[#193152]"
            />
          )}
        </Tooltip>
      </motion.div>
    </motion.div>
  );
}
