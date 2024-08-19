import { Id } from '../../shared/id.interface';

export interface TeacherResponse extends TeacherRequest, Id {}

export interface TeacherRequest {
  name: string;
  description: string;
  address: string;
  dateOfBirth: string;
  dateOfRegister: string;
  Phone: string;
  email: string;
  telegramUserName: string;
  specialization: string;
}
