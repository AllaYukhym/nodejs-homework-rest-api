const express = require("express");
const router = express.Router();
const { validateBody } = require("../../../middlewares/validation");
const authenticate = require("../../../middlewares/authenticate");
const { schemas } = require("../../../models/user");
const ctrl = require("../../../controllers/auth");

router.post("/signup", validateBody(schemas.signupSchema), ctrl.registration);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.get("/logout", authenticate, ctrl.logout);

module.exports = { authRouter: router };
