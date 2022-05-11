import * as Joi from 'joi';

const passwordSchema = Joi.object({
  password: Joi.string().min(6).required(),
});

export default passwordSchema;
