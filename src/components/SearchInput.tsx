import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@material-tailwind/react'
import React from 'react'

const SearchInput = () => {
  return (
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
  )
}

export default SearchInput