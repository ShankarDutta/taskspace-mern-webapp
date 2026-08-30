import { Link, useLocation } from "react-router";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import { Button } from "../ui/button";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { hash } = useLocation();
  return (
    <header
      aria-label="App-header"
      className="sticky top-0 z-50 border-b shadow backdrop-blur-lg">
      <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo  */}
        <nav>
          <Link
            to={"/"}
            aria-label="Taskspace-App">
            <img
              src="/logo-desktop.png"
              alt="logo-desktop"
              className="hidden h-auto w-32 md:block"
            />

            <img
              src="/logo-mobile.png"
              alt="logo-mobile"
              className="block h-12 w-auto md:hidden"
            />
          </Link>
        </nav>

        {/*Destop nav items  */}
        <nav className="font-inter hidden items-center gap-8 text-[15px] font-normal text-[#475569] lg:flex dark:text-[#94A3B8]">
          <a
            href="#features"
            className={` ${hash === "#features" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
            Features
          </a>

          <a
            href="#how-it-works"
            className={` ${hash === "#how-it-works" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
            How It Works
          </a>

          <a
            href="#why-taskspace"
            className={` ${hash === "#why-taskspace" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
            Why Task Space
          </a>

          <a
            href="#faq"
            className={` ${hash === "#faq" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
            FAQ
          </a>
        </nav>

        {/*tablet + Desktop nav items  */}
        <nav className="flex items-center gap-1 md:gap-3">
          <ThemeToggleButton />

          <Button
            variant="outline"
            nativeButton={false}
            className="font-inter hidden font-medium md:flex"
            render={<Link to={"/auth/login"}>Login</Link>}></Button>

          <Button
            className="font-inter flex bg-[#4F46E5] text-sm font-medium text-white hover:bg-blue-500"
            nativeButton={false}
            render={<Link to={"/auth/register"}>Register</Link>}></Button>

          <div className="flex items-center lg:hidden">
            <MobileHeader />
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
