import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'JWT access token',
    example: 'eHJHgj2hGJ1FJFDh2gfdj...'
  })
  accessToken: string
}