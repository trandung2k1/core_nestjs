import { IsNotEmpty } from 'class-validator';
import { BaseModel } from '../BaseModel';

export class UserModel extends BaseModel {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  readonly password: string;
}
