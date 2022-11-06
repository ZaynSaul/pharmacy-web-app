import React from 'react'
import Table from '../Table/Table'
import { users, userColumns } from '../../data/users'


const Users = () => {
  return (
    <Table dataSource={users} columns={userColumns} pagination={{ hideOnSinglePage: true, pageSize: 2 }} />
  )
}

export default Users