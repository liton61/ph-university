import { Schema, model } from 'mongoose';
// import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required!'],
    maxlength: [20, 'First name cannot exceed 20 characters!'],
    trim: true,
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not in capitalize formate',
    // },
  },
  middleName: {
    type: String,
    maxlength: [20, 'Middle name cannot exceed 20 characters!'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required!'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid',
    // },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required!"],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required!"],
  },
  fatherContact: {
    type: String,
    required: [true, "Father's contact is required!"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required!"],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required!"],
  },
  motherContact: {
    type: String,
    required: [true, "Mother's contact is required!"],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required!"],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required!"],
  },
  contact: {
    type: String,
    required: [true, "Local guardian's contact is required!"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required!"],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'ID is required!'], unique: true },
  name: { type: userNameSchema, required: [true, 'Name is required!'] },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender!',
    },
    required: [true, 'Gender is required!'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not valid email',
    // },
  },
  contact: { type: String, required: [true, 'Contact is required!'] },
  emergencyContact: {
    type: String,
    required: [true, 'Emergency contact is required!'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required!'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required!'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required!'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required!'],
  },
  profilePhoto: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
