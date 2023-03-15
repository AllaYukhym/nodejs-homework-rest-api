const { User } = require("../../models/user");
const { HttpError } = require("../../helpers/HttpError");
const { sendEmail } = require("../../helpers/sendEmail");
const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({ message: "Verification email sent" });
};

module.exports = { resendVerifyEmail: ctrlWrapper(resendVerifyEmail) };
