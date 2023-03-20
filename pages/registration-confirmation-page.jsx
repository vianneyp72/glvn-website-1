import NavBar from "../components/NavBarParents";
import Footer from "../components/Footer";
import RegConfirmation from "../components/RegConfirmation";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default withPageAuthRequired(function RegistrationConfirmationPage() {
  return (
    <main>
      <NavBar />
      <RegConfirmation />
      <Footer />
    </main>
  );
});
