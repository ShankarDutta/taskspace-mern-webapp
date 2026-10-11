import { compare, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
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

export const loginService = async ({ emailAddress, password }) => {
	const user = await User.findOne({ emailAddress }).select("+password");

	if (!user) {
		const error = new Error("InValid Email & Password");
		error.statusCode = 401;
		throw error;
	}

	const isCorrectPassword = await compare(password, user.password);

	if (!isCorrectPassword) {
		const error = new Error("InValid Email & Password");
		error.statusCode = 401;
		throw error;
	}

	const token = jwt.sign(
		{
			id: user._id,
		},
		env.JWT_SIGNATURE,
		{
			expiresIn: "1d",
		},
	);

	return {
		token,
		data: user,
	};
};
