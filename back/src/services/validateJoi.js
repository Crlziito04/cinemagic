const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  director: Joi.string().required(),
  duration: Joi.string().required(),
  genre: Joi.array().items(Joi.string()).required().max(5),
  rate: Joi.number().required(),
  poster: Joi.string().required(),
});

module.exports = schema;
