
import NavBar from '../components/NavBarParents'
import Form from '../components/RegForm'
import Footer from '../components/Footer'
import { useEffect, useContext } from 'react';


export default function Home() {
  return (
    <main>
      <NavBar />
      <Form />
      <Footer />
    </main>
  )
}
