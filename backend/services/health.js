import mongoose from "mongoose";

export const getHealthStatus = async () => {
	const dbStates = {
		0: "disconnected",
		1: "connected",
		2: "connecting",
		3: "disconnecting",
	};

	return {
		server: "running",
		database: dbStates[mongoose.connection.readyState] || "unknown",
		environment: process.env.NODE_ENV,
		uptime: `${process.uptime().toFixed(2)} seconds`,
		timestamp: new Date().toISOString(),
	};
};
