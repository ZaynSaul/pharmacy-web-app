import { faAdd, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Breadcrumb from '../Breadcrumb'
import Table from '../Table/Table'
import { users, userColumns } from '../../data/users'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@material-tailwind/react'
import { useQuery, gql } from '@apollo/client'
import { useSession } from 'next-auth/react'

const EmployeeQuery = gql`
  query {
    users{
        name,
        email,
        uType
        
      }
  }
`

export default function EmployeeComponent() {
  const employees = useQuery(EmployeeQuery);
  const session = useSession()
  console.log("Employees session", session)
  if (employees.loading) {
    return <div>Loading...</div>
  }
  else {
    return (
      <div className=' w-full p-4'>
        <Breadcrumb icon={faUserAlt} pageName="Employees" />
        <div className='bg-white rounded-md w-full p-2 mt-4'>
          <div className="w-full flex fel-row items-center justify-between p-2">
            <h3 className="text-gray-500">Employees Table</h3>
            <div className="w-[300px] h-[40px] flex flex-row items-center gap-4 border border-gray-300 rounded-md">
              <a className="cursor-pointer">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-lg text-teal-500 w-10 h-10"
                />
              </a>
              <input
                type="text"
                className="bg-transparent outline-none border-none w-full h-[35]"
                placeholder="search"
              />
            </div>
            <Tooltip content="Add">
              <button

                className="w-[100px] h-[40px] bg-green-500 text-white flex justify-center items-center rounded-md p-2"
                type="button"
                data-modal-toggle="defaultModal"
              >
                <FontAwesomeIcon icon={faAdd} />
                Add
              </button>
            </Tooltip>
          </div>
          <Table dataSource={employees.data.users} columns={userColumns} pagination={{ hideOnSinglePage: true, pageSize: 2 }} />
        </div>
      </div>
    )
  }
}
