import { Expose, plainToClass } from 'class-transformer';

export abstract class BaseModel {
  @Expose()
  id: number;

  @Expose()
  createdAt: number;

  @Expose()
  updatedAt: number;

  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
