import NavBar from "../components/NavBarParents";
import StudentProfile from "../components/StudentProfile";
import Footer from "../components/Footer";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default withPageAuthRequired(function RegForm() {
  return (
    <main>
      <NavBar />
      <StudentProfile />
      <Footer />
    </main>
  );
});

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["studentprofile", "navbar"])),
    },
  };
}
