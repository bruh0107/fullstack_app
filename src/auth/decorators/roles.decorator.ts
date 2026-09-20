import { UserRole } from '@prisma/client';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEYS = 'roles'

export const ROLES = (...roles: UserRole[]) => SetMetadata(ROLES_KEYS, roles)