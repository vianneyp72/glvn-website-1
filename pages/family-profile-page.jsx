import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import { parentTable } from "./api/utils/airtable";
import React, { useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useFirstRender } from "../utils/useFirstRender";

export default withPageAuthRequired(function RegForm() {
  const { user, isLoading, error } = useUser();

  const myID = user?.sub;

  const checkIfSubExists = async (sub) => {
    const records = await parentTable
      .select({
        filterByFormula: `{userID} = "${sub}"`,
      })
      .firstPage();

    if (records.length === 0) {
      // No matching records found
      console.log(`No user with sub ${sub} exists.`);
      axios.post("/api/createParent", { userID: myID });
      console.log(`User with ${sub} created.`);
    } else {
      // Matching records found
      console.log(`User with sub ${sub} exists.`);
    }
  };

  const firstRender = useFirstRender();
  useEffect(() => {
    console.log("CHECKING");
    if (firstRender) {
      checkIfSubExists(myID);
    }
  }, []);

  return (
    <main>
      <NavBar />
      <FamProfile />
      <Footer />
    </main>
  );
});
