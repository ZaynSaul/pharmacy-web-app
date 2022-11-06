import Head from 'next/head'
import Image from 'next/image'
import GetStartedPage from '../components/GetStartedPage'
import AuthLayout from '../components/Layouts/AuthLayout'

export default function Home() {
  return (
    <AuthLayout>
      <GetStartedPage />
    </AuthLayout>
  )
}
