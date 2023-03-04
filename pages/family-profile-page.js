import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import { parentTable, minifyRecords } from "./api/utils/airtable";
import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import axios from "axios";

export default withPageAuthRequired(function RegForm() {
  const { user, isLoading, error } = useUser();
  console.log("USER INFO:", user);

  const myID = user?.sid;

  function checkIfEmailExists(sid) {
    // Use filterByFormula to query the Users table
    parentTable
      .select({
        filterByFormula: `{userID} = "${sid}"`,
      })
      .firstPage(function (err, records) {
        // Handle any errors
        if (err) {
          console.error(err);
          return;
        }
        // Check if records array is empty or not
        if (records.length === 0) {
          // No matching records found
          console.log(`No user with email ${sid} exists.`);
          axios.post("/api/createParent", { userID: myID });
        } else {
          // Matching records found
          console.log(`User with email ${sid} exists.`);
        }
      });
  }

  checkIfEmailExists(myID);

  return (
    <main>
      <NavBar />
      <FamProfile />
      <Footer />
    </main>
  );
});
