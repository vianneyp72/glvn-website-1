
import NavBar from '../components/NavBarParents'
import Form from '../components/RegFormTest'
import {ParentContext} from '../contexts/ParentContext';
import { useEffect, useContext } from 'react';


export default function Home() {
  return (
    <main>
      <NavBar />
      <Form />
    </main>
  )
}
