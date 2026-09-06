import LoginForm from "@/components/Forms/Auth/LoginForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="grid h-[84dvh] place-items-center px-6">
      <Card className="grid w-full max-w-md grid-cols-1 gap-2 shadow-md md:gap-4 md:px-4 md:py-6">
        <CardHeader className="text-center">
          <CardTitle className="font-bricolage text-2xl font-bold md:text-[32px]">
            Welcome back
          </CardTitle>
          <CardDescription className="font-inter text-[12px] font-normal md:text-[14px]">
            Sign in to your Task Space account to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2 md:gap-4">
          <LoginForm />

          <div className="grid grid-cols-3 place-items-center">
            <Separator />
            <span className="font-inter text-[12px] font-semibold">Or</span>
            <Separator />
          </div>

          <Button
            variant="outline"
            className="w-full rounded-none">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-foreground">
              <title>Google</title>
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            {"  "}
            Continue With Google
          </Button>

          <CardDescription className="font-inter text-center text-[12px] font-normal md:text-[14px]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500">
              register
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
