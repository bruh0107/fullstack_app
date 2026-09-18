import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service.js';
import { UserModel } from './models/user.model.js';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserModel])
  getUsers() {
    return this.userService.findAll();
  }
}
