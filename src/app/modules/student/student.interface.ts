export type Guardian = {
  fatherName: string;
  fatherContact: string;
  fatherOccupation: string;
  motherName: string;
  motherContact: string;
  motherOccupation: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  address: string;
  contact: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contact: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profilePhoto?: string;
  isActive: 'active' | 'block';
};
