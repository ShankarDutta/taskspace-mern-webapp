import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { registerSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userMail: "",
      password: "",
      agree: false,
    },

    mode: "onSubmit",
  });

  const submitRegisterData = async (srData) => {
    await new Promise((r) => setTimeout(r, 1800)); // delay form submisson

    if (!srData) {
      toast.error("Registration Failed! Please Try Again");
    } else {
      toast.success("Registration successfully Completed");
      reset();
      // console.log(srData);
      navigate("/auth/login");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitRegisterData)}
      className="flex flex-col gap-4"
      noValidate>
      <div className="flex items-center justify-center gap-4">
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="font-inter text-[12px] font-semibold">
                First name
              </FieldLabel>
              <Input
                type="text"
                {...field}
                id={field.name}
                className="h-9 md:h-10"
                aria-invalid={fieldState.invalid}
                placeholder="First name"
                autoComplete="on"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="font-inter text-[12px] font-semibold">
                Last name
              </FieldLabel>
              <Input
                type="text"
                {...field}
                id={field.name}
                className="h-9 md:h-10"
                aria-invalid={fieldState.invalid}
                placeholder="Last name"
                autoComplete="on"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

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

      <Controller
        name="agree"
        control={control}
        render={({ field, fieldState }) => (
          <Field
            orientation="horizontal"
            data-invalid={fieldState.invalid}>
            <Checkbox
              id="form-rhf-checkbox-responses"
              name={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              aria-invalid={fieldState.invalid}
            />

            <FieldLabel
              htmlFor="form-rhf-checkbox-responses"
              className="font-normal">
              I agree to receive communications from Task Space via email, and
              phone calls, and agree to the Terms of Service & Privacy Policy.
            </FieldLabel>
          </Field>
        )}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="font-inter w-full cursor-pointer rounded-none bg-[#4F46E5] p-3 text-[12px] font-semibold text-white hover:bg-blue-500">
        {isSubmitting ?
          <Spinner />
        : <>Register Now</>}
      </Button>
    </form>
  );
};

export default RegisterForm;
