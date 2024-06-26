import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .max(20)
    .required()
    .trim()
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.pattern.base': '{#label} must be capitalized',
      'string.max': 'First name cannot exceed 20 characters!',
    }),
  middleName: Joi.string().max(20).trim().allow(''),
  lastName: Joi.string()
    .required()
    .trim()
    .regex(/^[A-Za-z]+$/)
    .messages({
      'string.pattern.base': '{#label} is not valid',
    }),
});

// Guardian Schema
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().trim(),
  fatherOccupation: Joi.string().required().trim(),
  fatherContact: Joi.string().required().trim(),
  motherName: Joi.string().required().trim(),
  motherOccupation: Joi.string().required().trim(),
  motherContact: Joi.string().required().trim(),
});

// Local Guardian Schema
const localGuardianSchema = Joi.object({
  name: Joi.string().required().trim(),
  occupation: Joi.string().required().trim(),
  contact: Joi.string().required().trim(),
  address: Joi.string().required().trim(),
});

// Student Schema
const studentSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.email': '{#label} is not a valid email',
  }),
  contact: Joi.string().required(),
  emergencyContact: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profilePhoto: Joi.string().optional(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .optional(),
});

export default studentSchema;
