import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/client';
import { BaseModel } from '../../common/models/base.model.js';

registerEnumType(UserRole, {
  name: 'UserRole'
})

@ObjectType({
  description: 'Модель пользователя',
})
export class UserModel extends BaseModel implements User {
  @Field(() => String, {
    nullable: true,
    defaultValue: 'John',
    description: 'Имя пользователя',
  })
  name: string;

  @Field(() => String, {
    description: 'Почта пользователя',
  })
  email: string;

  @Field(() => String, {
    description: 'Пароль пользователя',
  })
  password: string;

  @Field(() => UserModel, {
    description: 'Роль пользователя',
  })
  role: UserRole;
}