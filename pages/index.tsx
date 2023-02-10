import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'
import RegForm from '../components/RegForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavBar />
      <RegForm />
    </main>
  )
}
