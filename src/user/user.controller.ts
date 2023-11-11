import { UserService } from './user.service';
import { Controller, Get, Inject } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Controller('user')
export class UserController {
  constructor(
    @Inject('User_Service') private readonly userService: UserService,
    private moduleRef: ModuleRef,
  ) {}

  @Get()
  getUsers() {
    const service: UserService = this.moduleRef.get('User_Service');
    return service.getUsers();
  }
}
