import dotenv from "dotenv";
import { z } from "zod";

// Load environment variables
dotenv.config();

const clientUrlSchema =
	process.env.NODE_ENV === "production"
		? z.url({ protocol: /^https$/ }) // HTTPS only
		: z.url({ protocol: /^https?$/ }); // HTTP or HTTPS

const envSchema = z.object({
	PORT: z.coerce.number().int().min(1000).max(65535),
	CLIENT_URL: clientUrlSchema,
	MONGODB_URI: z.url({
		error: "MONGODB_URI must be a valid MongoDB connection string",
	}),
	NODE_ENV: z.enum(["production", "development"]),
});

const envVars = {
	PORT: process.env.PORT,
	CLIENT_URL: process.env.CLIENT_URL,
	MONGODB_URI: process.env.MONGODB_URI,
	NODE_ENV: process.env.NODE_ENV,
};

export const env = envSchema.parse(envVars);
