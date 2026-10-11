import { Router } from "express";
import {
	login,
	logout,
	registration,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/auth.validate.middlewares.js";
import { loginSchema, registerSchema } from "../validators/auth.validation.js";

const router = Router();

router.route("/register").post(validate(registerSchema), registration);
router.route("/login").post(validate(loginSchema), login);
router.route("/logout").get(logout);

export default router;
