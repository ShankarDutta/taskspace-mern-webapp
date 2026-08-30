import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
