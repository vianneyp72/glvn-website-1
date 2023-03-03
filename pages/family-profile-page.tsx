import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function RegForm() {
  const {user, isLoading, error} = useUser();
  console.log("USER INFO:",user)
  console.log("MYID:",user?.sid)
  return (
    <main>
      <NavBar />
      <FamProfile />
      <Footer />
    </main>
  );
}
