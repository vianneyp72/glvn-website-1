import NavBar from "../components/NavBarParents";
import FamProfile from "../components/FamProfile";
import Footer from "../components/Footer";
import { parentTable } from "./api/utils/airtable";
import React, { useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useFirstRender } from "../utils/useFirstRender";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default withPageAuthRequired(function RegForm() {
  const { user } = useUser();

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
      console.log(`User with sub (${sub}) exists. Continue to Account`);
    }
  };

  const firstRender = useFirstRender();
  useEffect(() => {
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["familyprofile", "navbar"])),
    },
  };
}
