import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContact: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContact: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profilePhoto: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
