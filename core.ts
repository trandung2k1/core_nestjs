class UserService {
  getUsers(): void {
    console.log('Get users');
  }
}

class UserRepository {
  find() {
    console.log('All records');
  }
}
class Injector {
  private _container = new Map();
  constructor(private providers: any[] = []) {
    this.providers.forEach((service) =>
      this._container.set(service, new service()),
    );
  }
  get(serviceKey: any) {
    const serviceInstance = this._container.get(serviceKey);
    if (!serviceInstance)
      throw new Error('This provider does not exist in the current context');
    return serviceInstance;
  }
}
const inject = new Injector([UserService, UserRepository]);
const userService: UserService = inject.get(UserService);
userService.getUsers();
const userRepository: UserRepository = inject.get(UserRepository);
userRepository.find();
