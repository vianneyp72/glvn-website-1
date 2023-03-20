import NavBar from "../components/NavBarParents";
import Footer from "../components/Footer";
import RegConfirmation from "../components/RegConfirmation";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function RegistrationConfirmationPage() {
  return (
    <main>
      <NavBar />
      <RegConfirmation />
      <Footer />
    </main>
  );
}
