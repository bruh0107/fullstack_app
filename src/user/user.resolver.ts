import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service.js';
import { UserModel } from './models/user.model.js';
import { Authorization } from '../auth/decorators/authorization.decorator.js';
import { Authorized } from '../auth/decorators/authorized.guard.js';
import { type User, UserRole } from '@prisma/client';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Authorization()
  @Query(() => UserModel)
  getMe(@Authorized() user: User) {
    return user;
  }

  @Authorization(UserRole.ADMIN)
  @Query(() => [UserModel], {
    name: 'getAllUsers',
    description: 'This is method for get all users',
  })
  async getUsers() {
    return await this.userService.findAll();
  }
}
