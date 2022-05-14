import * as Joi from 'joi';

const EntrySchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export default EntrySchema;
