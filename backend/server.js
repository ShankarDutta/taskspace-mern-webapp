import compression from "compression";
import cors from "cors";
import { setServers } from "dns/promises";
import express from "express";
import helmet from "helmet";
import corsOption from "./config/corsOption.js";
import connectDb from "./config/db.js";
import { env } from "./config/env.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import healthRoute from "./routes/health.routes.js";

// Initialize Express application
const app = express();

// Hide Express signature
app.disable("x-powered-by");

// Define server port
const port = env.PORT;

// Security middlewares
app.use(helmet());
app.use(rateLimiter);

// Enable response compression
app.use(compression());

// Body parsers
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cors(corsOption));

// Health check endpoint
app.use("/api/v1/health", healthRoute);

// Start the server
const startServer = async () => {
	try {
		if (env.NODE_ENV !== "production") {
			await setServers(["1.1.1.1", "8.8.8.8"]);
		}

		await connectDb();

		app.listen(port, () =>
			console.log(`Your server running on http://localhost:${port}`),
		);
	} catch (err) {
		console.error("Failed to start server:", err);
		process.exit(1);
	}
};

startServer();
