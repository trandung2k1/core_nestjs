import { BaseModel } from '../BaseModel';
import { Exclude, Expose, Transform } from 'class-transformer';

export class UserResult extends BaseModel {
  @Exclude()
  firstName: string;

  @Exclude()
  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  fullName: string;

  @Expose()
  password: string;
}
