import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

export default function ProductComponent() {
  return (
    <div className=' w-full p-4'>
      <Breadcrumb icon={faHandHoldingMedical} pageName="Product" />
    </div>
  )
}
