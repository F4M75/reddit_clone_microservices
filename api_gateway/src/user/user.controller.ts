import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateUserDto, USER_PATTERNS } from '@f4m75/shared-service-contract';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userClient.send(USER_PATTERNS.CREATE, createUserDto);
  }
}
