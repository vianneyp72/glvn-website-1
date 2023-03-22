import NavBar from "../components/NavBarParents";
import Footer from "../components/Footer";
import RegConfirmation from "../components/RegConfirmation";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default withPageAuthRequired(function RegistrationConfirmationPage() {
  return (
    <main>
      <NavBar />
      <RegConfirmation />
      <Footer />
    </main>
  );
});

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["confirmation", "navbar"])),
    },
  };
}
