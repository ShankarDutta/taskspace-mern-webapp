import z from "zod";

export const loginSchema = z.object({
  userMail: z.email({ error: "Invalid Email Address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must not exceed 128 characters"),
});
