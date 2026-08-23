import { env } from "./env.js";

const corsOption = {
	origin: env.CLIENT_URL,
	credentials: true,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
};

export default corsOption;
