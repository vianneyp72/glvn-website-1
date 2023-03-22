import NavBar from "../components/NavBarParents";
import RegForm from "../components/RegForm";
import Footer from "../components/Footer";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default withPageAuthRequired(function RegistrationFormPage() {
  return (
    <main>
      <NavBar />
      <RegForm />
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
