import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
// import { UserService } from './user.service';
import { UserMockService } from './user.mock.service';
import { store } from 'src/store/store.config';
import { StoreService } from './store.service';
const configFacebook = {
  appId: '227478836337509',
  appSecret: '77522deefec8d37cb74********',
};

function createStore(config: typeof store): StoreService {
  console.log('inject', config);
  return new StoreService();
}
@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'User_Service',
      useClass: UserMockService,
      // useClass: UserService,
    },
    {
      provide: 'APP_FACEBOOK',
      useValue: configFacebook,
    },
    {
      provide: 'STORE_CONFIG',
      useValue: store,
    },
    // {
    //   provide: 'STORE_SERVICE',
    //   useFactory: () => {
    //     return new StoreService();
    //   },
    // },
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
      inject: [
        {
          token: 'STORE_CONFIG',
          optional: true,
        },
      ],
    },
  ],
})
export class UserModule {}
