import { getHealthStatus } from "../services/health.js";

export const getHealth = async (req, res) => {
	try {
		const health = await getHealthStatus();

		return res.status(200).json({
			success: true,
			message: "Server is healthy",
			data: health,
		});
	} catch (error) {
		console.error("Health check error:", error);

		return res.status(500).json({
			success: false,
			message: "Health check failed",
		});
	}
};
