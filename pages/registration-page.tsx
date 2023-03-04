
import NavBar from '../components/NavBarParents'
import Form from '../components/RegForm'
import Footer from '../components/Footer'
import { useEffect, useContext } from 'react';
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";


export default function RegForm() {
  const user = useUser();
  return (
    <main>
      <NavBar />
      <Form />
      <Footer />
    </main>
  )
}
