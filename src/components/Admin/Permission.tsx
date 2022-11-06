import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

export default function PermissionComponent() {
  return (
    <div className=' w-full p-4'>
      <Breadcrumb icon={faUserCog} pageName="Permission" />
    </div>
  )
}
