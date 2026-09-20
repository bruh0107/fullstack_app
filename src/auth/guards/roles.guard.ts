import {
  type CanActivate,
  type ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { User, UserRole } from '@prisma/client';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLES_KEYS } from '../decorators/roles.decorator.js';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const rolesContext = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEYS,
      [context.getHandler(), context.getClass()],
    );

    if (!rolesContext) return true;

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const user = request.user as User;

    if (!rolesContext.includes(user.role))
      throw new ForbiddenException('У вас недостаточно прав');

    return true;
  }
}
