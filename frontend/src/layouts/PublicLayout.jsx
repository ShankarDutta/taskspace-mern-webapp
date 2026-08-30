import Footer from "@/components/Footers/Footer";
import Header from "@/components/Headers/Header";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;
