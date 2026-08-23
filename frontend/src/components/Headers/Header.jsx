import { Link } from "react-router";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";

const Header = () => {
  return (
    <header
      aria-label="App-header"
      className="sticky top-0 z-50 border-b shadow backdrop-blur-lg">
      <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo  */}
        <nav>
          <Link
            to={"/"}
            aria-label="App Name"
            className="text-2xl font-bold">
            RVSK APP
          </Link>
        </nav>

        {/* nav items  */}
        <nav className="flex items-center gap-4">
          <Link
            to={"/"}
            className="hover:text-black/75 dark:hover:text-white/75">
            Home
          </Link>

          <Link
            to={"/about"}
            className="hover:text-black/75 dark:hover:text-white/75">
            About
          </Link>

          <ThemeToggleButton />
        </nav>
      </section>
    </header>
  );
};

export default Header;
