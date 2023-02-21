const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = {
  addSchema,
};

// module.exports = {
//   contactValidation: (req, res, next) => {
//     const { error } = schema.validate(req.body);

//     if (error) {
//       throw HttpError(400, error.message);
//     }

//     next();
//   },
// };
