const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares/validation");
const authenticate = require("../../middlewares/authenticate");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.get("/current", authenticate, ctrl.getCurrent);
router.get("/logout", authenticate, ctrl.logout);
router.post("/signup", validateBody(schemas.signupSchema), ctrl.registration);
router.post(
  "/login",
  authenticate,
  validateBody(schemas.loginSchema),
  ctrl.login
);

module.exports = { authRouter: router };
