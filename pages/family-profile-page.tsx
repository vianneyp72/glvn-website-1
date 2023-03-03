import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import React from "react"
import { useUser, withPageAuthRequired, } from "@auth0/nextjs-auth0/client";
import axios from "axios";


export default withPageAuthRequired(function RegForm() {
  const {user, isLoading, error} = useUser();
  console.log("USER INFO:",user)
  console.log("MYID:",user?.sid)
  const myID = user?.sid; 

  // const checkSID = (myID) => {
  //   return(
  //     myID
  //   )
  // };


// const initCreate = async (data) => {
//     console.log("Data:", data);
//     try {
//       const responses = await Promise.all(
//         data.students_cart.map((item) => axios.post("/api/createStudent", item))
//       );
//       console.log("Form submitted successfully:", responses);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };
    

  return (
    <main>
      <NavBar />
      <FamProfile />
      <Footer />
    </main>
  );
})



