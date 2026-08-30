import AuthHeader from "@/components/Headers/AuthHeader";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />

      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
