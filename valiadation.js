const Joi = require('@hapi/joi');
//Validation

//register validation
const registerValidation = (data) => {
  const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  };
  return Joi.valid(data, schema);
};

//login validation
const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  };
  return Joi.valid(data, schema);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
