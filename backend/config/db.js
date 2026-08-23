import mongoose from "mongoose";
import { env } from "./env.js";

const connectDb = async () => {
	try {
		await mongoose.connect(env.MONGODB_URI);
		console.log("Database connected successfully!");
	} catch (err) {
		console.error("Database connection failed!");
		console.error(err.message);
		process.exit(1);
	}
};

export default connectDb;
