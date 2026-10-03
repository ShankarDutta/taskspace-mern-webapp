import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},

		lastName: {
			type: String,
			required: true,
		},

		emailAddress: {
			type: String,
			required: true,
		},

		password: {
			type: String,
			required: true,
		},

		acceptTerms: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
		timeseries: true,
	},
);

export const User = mongoose.model("User", userSchema);
