const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = {
  schema,
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
