import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer.jsx";
import Navbar from "../components/common/Navbar.jsx";
import WhatsAppButton from "../components/common/WhatsAppButton.jsx";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
