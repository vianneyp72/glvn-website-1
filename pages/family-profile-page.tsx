import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import { parentTable, minifyRecords } from './api/utils/airtable';
import React from "react"
import { useUser, withPageAuthRequired, } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { FieldSet } from "airtable/lib/field_set";
import { Records } from "airtable/lib/records";


export default withPageAuthRequired(function RegForm() {
  const {user, isLoading, error} = useUser();
  console.log("USER INFO:",user)

  const myID = user?.sid

  const results =  parentTable
            .select({ filterByFormula: `userId = '${myID}'` })
            .firstPage();



  console.log("type:",typeof results)
  console.log("results:",results)

//   const arr= []
//   if(min === arr){
//     const data = {"userID": myID}
//     axios.post("/api/createParent", data)
//   }
// console.log(results)


  return (
    <main>
      <NavBar />
      <FamProfile />
      <Footer />
    </main>
  );
})



