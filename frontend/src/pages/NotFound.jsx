import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, HouseIcon } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-muted-foreground text-sm font-semibold tracking-[0.3em] uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl font-black tracking-tight sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold tracking-tight">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mt-4">
          Sorry, the page you're looking for doesn't exist, has been moved, or
          the URL might be incorrect.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            render={
              <Link to="/">
                <HouseIcon className="size-4" />
                Back Home
              </Link>
            }
          />

          <Button
            variant="outline"
            onClick={() => window.history.back()}>
            <ArrowLeftIcon className="size-4" />
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
