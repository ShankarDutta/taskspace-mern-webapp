import { hash } from "bcryptjs";
import { User } from "../models/User.model.js";

export const registrationService = async ({
	firstName,
	lastName,
	emailAddress,
	password,
	acceptTerms,
}) => {
	// check email address
	const isExistUserMail = await User.findOne({ emailAddress });

	if (isExistUserMail) {
		const error = new Error("User Email Already Exist");
		error.statusCode = 409;
		throw error;
	}

	//hash password
	const hashedPassword = await hash(password, 10);

	const registerUser = await User.create({
		firstName,
		lastName,
		emailAddress,
		password: hashedPassword,
		acceptTerms,
	});

	return registerUser;
};
