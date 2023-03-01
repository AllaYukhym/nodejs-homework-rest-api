const jwt = require("jsonwebtoken");

const { HttpError } = require("../../helpers/HttpError");

const isValidToken = (req, res, next) => {
  const [tokenType, token] = req.headers["authorization"].split(" ");

  if (!token) {
    throw HttpError(401, "Not authorized");
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = isValidToken;
