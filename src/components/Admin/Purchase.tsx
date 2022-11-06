import { faShop } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Breadcrumb from '../Breadcrumb'

export default function PurchaseComponent() {
  return (
    <div className=' w-full p-4'>
      <Breadcrumb icon={faShop} pageName="Purchase" />
    </div>
  )
}
