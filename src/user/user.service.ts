import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, username: 'john', email: 'john@email.com' },
    { id: 2, username: 'bob', email: 'bob@email.com' },
    { id: 3, username: 'ken', email: 'ken@email.com' },
  ];

  findAll() {
    return this.users;
  }
}
