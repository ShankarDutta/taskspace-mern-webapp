import { Link, useLocation } from "react-router";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import { Button } from "../ui/button";

const AuthHeader = () => {
  const { pathname } = useLocation();

  return (
    <header
      aria-label="App-header"
      className="sticky top-0 z-50 border-b shadow backdrop-blur-lg">
      <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          to={"/"}
          aria-label="Taskspace-App">
          <img
            src="/logo-desktop.png"
            alt="logo-desktop"
            className="hidden h-auto w-32 md:block"
          />
        </Link>

        <nav className="flex items-center gap-4">
          <ThemeToggleButton />

          {pathname === "/auth/login" ?
            <Button
              className="font-inter flex bg-[#4F46E5] text-sm font-medium text-white hover:bg-blue-500"
              nativeButton={false}
              render={<Link to={"/auth/register"}>Register</Link>}></Button>
          : <Button
              nativeButton={false}
              className="font-inter flex bg-[#4F46E5] text-sm font-medium text-white hover:bg-blue-500"
              render={<Link to={"/auth/login"}>Login</Link>}></Button>
          }
        </nav>
      </section>
    </header>
  );
};

export default AuthHeader;
