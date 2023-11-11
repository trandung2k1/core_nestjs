import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModel } from './shared/dto/users/create-user.model';
import { UserResult } from './shared/dto/users/create-user.result';
import { plainToClass } from 'class-transformer';
import { ModuleRef } from '@nestjs/core';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private moduleRef: ModuleRef,
  ) {}

  @Get()
  getHello(): string {
    const appService = this.moduleRef.get(AppService);
    return appService.getHello();
  }

  @Post()
  createNewUser(@Body() user: UserModel): UserResult {
    return plainToClass(UserResult, user);
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return id;
  }
}
