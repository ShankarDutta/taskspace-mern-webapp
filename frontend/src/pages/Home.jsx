import ToastButton from "@/components/Buttons/ToastButton";
import Seo from "@/components/SEO/Seo";

const Home = () => {
  return (
    <section className="grid h-[78dvh] place-items-center md:h-[82dvh] lg:h-[84dvh]">
      <Seo
        title="Home"
        description="A production-ready React + Vite starter template with Tailwind CSS, React Router, ESLint, Prettier, and modern best practices for scalable frontend development."
        canonical="/"
        keywords={
          "React , Vite , React + Vite starter template , Production-grade React Template "
        }
      />

      <section className="space-y-4 px-6 text-center">
        <h1 className="text-3xl font-semibold lg:text-5xl">
          React + Vite Starter Kit
        </h1>

        <h2 className="text-lg lg:text-3xl">
          Production-grade React frontend starter template
        </h2>

        <ToastButton />
      </section>
    </section>
  );
};

export default Home;
