import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import Register from '../components/Register'

export default function register() {
  return (
     <AuthLayout title="Register">
       <Register />
     </AuthLayout>
  )
}
