import {
	loginService,
	registrationService,
} from "../services/auth.services.js";

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
			message: error.message || "Internal Server Error",
		});
	}
};

export const login = async (req, res) => {
	try {
		const { token, data } = await loginService(req.body);

		res.cookie("acessToken", token, {
			httpOnly: true,
			sameSite: "strict",
			maxAge: 24 * 60 * 60 * 1000,
		});

		return res.status(200).json({
			success: true,
			message: "Login Successful",
			greeting: `Welcome ${data.firstName}`,
		});
	} catch (error) {
		console.error(error.message);

		res.status(error.statusCode || 500).json({
			success: false,
			message: error.message || "Internal Server Error",
		});
	}
};

export const logout = (req, res) => {
	try {
		res.clearCookie("acessToken", "", {
			maxAge: 0,
		});

		return res.status(200).json({
			success: true,
			message: "Logout Successfully",
		});
	} catch (error) {
		console.error(error.message);

		res.status(error.statusCode || 500).json({
			success: false,
			message: error.message || "Internal Server Error",
		});
	}
};
