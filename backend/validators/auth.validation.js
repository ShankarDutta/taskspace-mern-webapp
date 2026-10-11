import z from "zod";

export const registerSchema = z.object({
	firstName: z.string().min(2, { error: "First name atleast 2 characters" }),

	lastName: z.string().min(2, { error: "First name atleast 2 characters" }),

	emailAddress: z.email({ error: "Invalid Email Address" }),

	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(128, "Password must not exceed 128 characters"),

	acceptTerms: z.boolean().refine((value) => value === true),
});

export const loginSchema = z.object({
	emailAddress: z.email({ error: "Invalid Email Address" }),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(128, "Password must not exceed 128 characters"),
});
