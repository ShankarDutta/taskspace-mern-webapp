import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { loginSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      userMail: "",
      password: "",
    },

    mode: "all",
  });

  const sendLoginData = async (lData) => {
    await new Promise((r) => setTimeout(r, 1800)); // delay data submittinng

    console.log(lData);

    if (lData) {
      reset();
      toast.success("Login Succesfully");
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(sendLoginData)}
      className="grid gap-3">
      <Controller
        name="userMail"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="font-inter text-[12px] font-semibold">
              Email Address
            </FieldLabel>
            <Input
              type="email"
              {...field}
              id={field.name}
              className="h-9 md:h-10"

              aria-invalid={fieldState.invalid}
              placeholder="Enter your email Address"
              autoComplete="on"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="font-inter text-[12px] font-semibold">
              Password
            </FieldLabel>
            <Input
              type="password"
              {...field}
              id={field.name}
              className="h-9 md:h-10"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your Password"
              autoComplete="off"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="font-inter cursor-pointer rounded-none bg-[#4F46E5] p-3 text-[12px] font-semibold text-white hover:bg-blue-500">
        {isSubmitting ?
          <Spinner />
        : <>Login</>}
      </Button>
    </form>
  );
};

export default LoginForm;
