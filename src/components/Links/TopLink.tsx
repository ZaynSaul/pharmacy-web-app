import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@material-tailwind/react'
import React from 'react'
import { topBarRoutes } from '../../utils/routes'


const TopLink = () => {
  return (
    <ul className="flex justify-center items-center  gap-4">
      {topBarRoutes.map((route, key) => {
        return <Tooltip content="Calendar" key={key}>
          <li className="relative flex items-center justify-center w-7 h-7 text-[#193152] hover:text-white hover:bg-[#193152] hover:rounded-full transition-all">
            <span>
              <FontAwesomeIcon
                icon={route.icon}
                className="text-lg cursor-pointer  "
              />
            </span>
            <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
          </li>
        </Tooltip>
      })}
    </ul>
  )
}

export default TopLink
