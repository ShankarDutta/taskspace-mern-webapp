import Seo from "@/components/SEO/Seo";
import { Button } from "@/components/ui/button";
import { techStack } from "@/lib/information";

const About = () => {
  return (
    <section className="grid min-h-[84dvh] place-items-center px-6">
      <Seo
        title="About"
        description="Discover the technologies and best practices behind this production-ready React + Vite starter template."
        canonical="/about"
        keywords="React, Vite, Tailwind CSS, React Router, Starter Kit"
      />

      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold lg:text-5xl">
            Built for Modern React Development
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-base lg:text-lg">
            A production-ready React + Vite starter template featuring a clean
            architecture, modern tooling, and best practices to help you build
            scalable frontend applications faster.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Button
                variant="outline"
                key={tech}>
                {tech}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
