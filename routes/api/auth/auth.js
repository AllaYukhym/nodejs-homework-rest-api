const express = require("express");
const router = express.Router();
const { validateBody } = require("../../../middlewares/validation");
const { authenticate } = require("../../../middlewares/authenticate");
const { upload } = require("../../../middlewares/upload");
const { schemas } = require("../../../models/user");
const ctrl = require("../../../controllers/auth");

router.post("/signup", validateBody(schemas.signupSchema), ctrl.registration);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.get("/logout", authenticate, ctrl.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = { authRouter: router };
