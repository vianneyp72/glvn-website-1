import LandingPage from '../components/LandingPage'
import RegForm from "../components/RegForm";
import NavBar from "../components/NavBarParents";
import Footer from "../components/Footer";
import RegWelcome from "../components/RegWelcome"

export default function Home() {

  return (
    <main>
        <NavBar/>
        <RegWelcome/>
        <Footer/>
    </main>
  )
}
