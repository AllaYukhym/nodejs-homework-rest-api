const Joi = require("joi");
const HttpError = require("../helpers/");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = {
  contactValidation: (req, res, next) => {
    const { error } = addSchema.validate(req.body);
    console.log("error from schema:", error);
    console.log("error from schema:", error.message);

    if (error) {
      throw HttpError(400, error.message);
    }

    next();
  },
};
