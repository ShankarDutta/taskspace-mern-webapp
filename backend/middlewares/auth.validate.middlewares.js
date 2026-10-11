export const validate = (schema) => (req, res, next) => {
	const result = schema.safeParse(req.body);

	if (!result.success) {
		res.status(400).json({
			success: false,
			message: result.error.issues[0].message,
		});
	}

	req.body = result.data;

	next();
};
