const Joi = require('joi-browser');

const validators = {
  example1: {
    string: 'Joi.string().alphanum().min(3).max(12)',
    validator: Joi.string().alphanum().min(3).max(12)
  },
  example2: {
    string: 'Joi.string().alphanum().min(3).max(12)',
    validator: Joi.string().alphanum().min(3).max(12)
  },
  example3: {
    string: 'Joi.string().alphanum().min(3).max(12)',
    validator: Joi.string().alphanum().min(3).max(12)
  },
  example4: {
    string: 'Joi.string().alphanum().min(3).max(12).required()',
    validator: Joi.string().alphanum().min(3).max(12).required()
  },
  example5: {
    string: `Joi.object({
      id: Joi.string().alphanum().min(12).max(12).required(),
      name: Joi.string().regex(/^[A]{1}/).required(),
      password: Joi.string().alphanum().min(6).max(8).required(),
      memberNumber: Joi.number().integer(),
      isAdmin: Joi.boolean()
    })`,
    validator: Joi.object({
      id: Joi.string().alphanum().min(12).max(12).required(),
      name: Joi.string().regex(/^[A]{1}/).required(),
      password: Joi.string().alphanum().min(6).max(8).required(),
      memberNumber: Joi.number().integer(),
      isAdmin: Joi.boolean()
    })
  },
  example6: {
    string: `Joi.object({
      roles1: Joi.alternatives().try(Joi.number(), Joi.string()),
      roles2: Joi.any().required(),
      roles3: Joi.isArray.min(2),
      roles4: Joi.array().items(Joi.string().valid('admin','associate'))
    })`,
    validator: Joi.object({
      roles1: Joi.alternatives().try(Joi.number(), Joi.string()),
      roles2: Joi.any().required(),
      roles3: Joi.array().min(2),
      roles4: Joi.array().items(Joi.string().valid('admin','associate'))
    })
  },
  example7: {
    string: `Joi.object({
      roles1: Joi.object({
        a: Joi.number().min(1).max(100).integer(),
        b: 'some string'
      }),
      roles2: Joi.alternatives().try(Joi.number(), Joi.string()),
      roles3: Joi.array().min(2),
      roles4: Joi.array().items(Joi.string().valid('admin','associate'))
    })`,
    validator: Joi.object({
      roles1: Joi.object({
        a: Joi.number().min(1).max(100).integer(),
        b: 'some string'
      }),
      roles2: Joi.alternatives().try(Joi.number(), Joi.string()),
      roles3: Joi.array().min(2),
      roles4: Joi.array().items(Joi.string().valid('admin','associate'))
    })
  },
  example8: {
    string: `Joi.object({
      email: Joi.string().email(),
      badEmail: Joi.string().email()
    })`,
    validator: Joi.object({
      email: Joi.string().email(),
      badEmail: Joi.string().email()
    })
  }
}

export { validators }