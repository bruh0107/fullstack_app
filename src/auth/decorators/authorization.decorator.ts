import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard.js';
import { UserRole } from '@prisma/client';
import { ROLES } from './roles.decorator.js';
import { RolesGuard } from '../guards/roles.guard.js';

export function Authorization(...roles: UserRole[]) {
  if (roles.length > 0){
    return applyDecorators(ROLES(...roles), UseGuards(JwtGuard, RolesGuard));
  }

  return applyDecorators(UseGuards(JwtGuard));
}
