import { Resolver, Context, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service.js';
import type { GqlContext } from '../common/interfaces/gql-context.interface.js';
import { AuthModel } from './models/auth.model.js';
import { RegisterInput } from './inputs/register.input.js';
import { LoginInput } from './inputs/login.input.js';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthModel)
  async register(
    @Context() { res }: GqlContext,
    @Args('data') input: RegisterInput,
  ) {
    return this.authService.register(res, input);
  }

  @Mutation(() => AuthModel)
  async login(@Context() { res }: GqlContext, @Args('data') input: LoginInput) {
    return this.authService.login(res, input);
  }

  @Mutation(() => AuthModel)
  async refresh(@Context() { req, res }: GqlContext) {
    return this.authService.refresh(req, res);
  }

  @Mutation(() => Boolean)
  async logout(@Context() { res }: GqlContext) {
    return this.authService.logout(res);
  }
}
