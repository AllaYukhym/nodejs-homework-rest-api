const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

// router.get("/current", ctrl.);
// router.get("/logout", ctrl.);
router.post("/signup", validateBody(schemas.signupSchema), ctrl.registration);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = { authRouter: router };
