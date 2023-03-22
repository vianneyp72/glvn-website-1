import NavBar from "../components/NavBarParents";
import Footer from "../components/Footer";
import RegWelcome from "../components/RegWelcome";
import { useUser } from "@auth0/nextjs-auth0/client";
import router from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { user } = useUser();
  if (user) router.push("/family-profile-page");
  return (
    <main>
      <NavBar />
      <RegWelcome />
      <Footer />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["welcome"])),
    },
  };
}
