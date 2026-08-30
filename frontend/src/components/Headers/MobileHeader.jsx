import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}>
      <SheetTrigger>
        <MenuIcon
          size={28}
          aria-label="Mobile-Menu-Toggle-Button"
        />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="border-b-2">
          <Link
            to={"/"}
            aria-label="Taskspace-App">
            <img
              src="/logo-desktop.png"
              alt="logo-desktop"
              className="h-auto w-32"
            />
          </Link>
        </SheetHeader>

        <section>
          <nav className="font-inter flex flex-col gap-4 px-4 py-4 text-[15px] font-normal text-[#475569] dark:text-[#94A3B8]">
            <a
              onClick={() => setIsOpen(false)}
              href="#features"
              className={` ${hash === "#features" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
              Features
            </a>

            <a
              onClick={() => setIsOpen(false)}
              href="#how-it-works"
              className={` ${hash === "#how-it-works" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
              How It Works
            </a>

            <a
              onClick={() => setIsOpen(false)}
              href="#why-taskspace"
              className={` ${hash === "#why-taskspace" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
              Why Task Space
            </a>

            <a
              onClick={() => setIsOpen(false)}
              href="#faq"
              className={` ${hash === "#faq" ? " text-blue-500 dark:text-blue-400" : "hover:text-black/85 dark:hover:text-white/85"}`}>
              FAQ
            </a>

            <Button
              variant="default"
              nativeButton={false}
              className="font-inter font-medium"
              render={<Link to={"/auth/login"}>Login</Link>}></Button>
          </nav>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
