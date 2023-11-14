import { UserService } from './user.service';
import { Controller, Get, Inject } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { store } from 'src/store/store.config';

@Controller('users')
export class UserController {
  constructor(
    @Inject('User_Service') private readonly userService: UserService,
    @Inject('APP_FACEBOOK') private readonly appFacebookService: any,
    @Inject('STORE_CONFIG') private readonly storeConfig: typeof store,
    @Inject('STORE_SERVICE') private readonly storeService: any,
    private moduleRef: ModuleRef,
  ) {
    console.log(appFacebookService);
    console.log(storeConfig);
  }

  @Get()
  getUsers() {
    // const service: UserService = this.moduleRef.get('User_Service');
    this.storeService.save('Oke');
    return this.userService.getUsers();
  }
}
