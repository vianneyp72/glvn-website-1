import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import React from "react"
import { useUser, withPageAuthRequired, } from "@auth0/nextjs-auth0/client";


export default withPageAuthRequired(function RegForm() {
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
})



