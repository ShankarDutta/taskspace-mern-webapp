import { registrationService } from "../services/auth.services.js";

export const registration = async (req, res) => {
	try {
		const newUser = await registrationService(req.body);

		res.status(201).json({
			success: true,
			message: "Account Created Successfully",
			data: newUser,
		});
	} catch (error) {
		console.error(error.message);
		res.status(error.statusCode || 500).json({
			success: false,
			message: res.message || "Internal Server Error",
		});
	}
};
