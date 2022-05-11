import * as Joi from 'joi';

const nameSchema = Joi.object({
  name: Joi.string().required(),
});

export default nameSchema;