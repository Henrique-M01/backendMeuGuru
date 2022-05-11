import * as Joi from 'joi';

const nameSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

export default nameSchema;