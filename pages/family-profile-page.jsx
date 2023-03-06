import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import { parentTable, minifyRecords } from "./api/utils/airtable";
import React, { useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useFirstRender } from "../utils/useFirstRender";

export default withPageAuthRequired(function RegForm() {
  const { user, isLoading, error } = useUser();
  console.log("USER INFO:", user);

  const myID = user?.sub;

  const checkIfEmailExists2 = async (sub) => {
    const records = await parentTable
      .select({
        filterByFormula: `{userID} = "${sub}"`,
      })
      .firstPage();

    console.log("records", records);

    if (records.length === 0) {
      // No matching records found
      console.log(`No user with email ${sub} exists.`);
      axios.post("/api/createParent", { userID: myID });
    } else {
      // Matching records found
      console.log(`User with email ${sub} exists.`);
    }
  };

  const firstRender = useFirstRender();
  useEffect(() => {
    console.log("CHECKING");
    if (firstRender) {
      checkIfEmailExists2(myID);
    }
  }, []);
  console.log("MYID:", myID);

  return (
    <main>
      <NavBar />
      <FamProfile />
      <Footer />
    </main>
  );
});
