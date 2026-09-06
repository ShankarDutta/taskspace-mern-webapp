import { Link } from "react-router";

const AuthFooter = () => {
  return (
    <footer className="bottom-0 mt-4 w-full border-t-2 md:fixed md:mt-0">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 md:flex-row">
        <h3 className="font-inter text-[14px] font-normal">
          © 2024 Task Space. All rights reserved.
        </h3>

        <section className="flex items-center gap-2 md:gap-4">
          <Link
            to={"/privacy-policy"}
            className="font-inter text-[12px] font-normal hover:text-blue-500 hover:underline hover:underline-offset-1 md:text-[14px]">
            Privacy Policy
          </Link>
          <Link
            to={"/terms-of-Service"}
            className="font-inter text-[12px] font-normal hover:text-blue-500 hover:underline hover:underline-offset-1 md:text-[14px]">
            Terms of Service
          </Link>
        </section>
      </section>
    </footer>
  );
};

export default AuthFooter;
