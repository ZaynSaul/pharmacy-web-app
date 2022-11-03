import Head from 'next/head'
import Image from 'next/image'
import AuthLayout from '../components/Layouts/AuthLayout'
import SignIn from '../components/SignIn'

export default function Home() {
  return (
     <AuthLayout>
       <SignIn />
     </AuthLayout>
  )
}
