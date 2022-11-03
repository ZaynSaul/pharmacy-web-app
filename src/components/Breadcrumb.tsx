import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Breadcrumb({icon, pageName}: any) {
  return (
     <nav
      className="w-full flex px-5 py-3 bg-white rounded-lg"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-bold text-[#193152] "
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-2xl text-[#193152] mr-2"
            />
            {pageName}
          </a>
        </li>
      </ol>
    </nav>
  )
}
