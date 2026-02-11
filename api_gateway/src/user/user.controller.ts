import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto,
  USER_PATTERNS,
} from '@f4m75/shared-service-contract';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userClient.send(USER_PATTERNS.CREATE, createUserDto);
  }

  @Get()
  getAllUser() {
    return this.userClient.send(USER_PATTERNS.FIND_ALL, {});
  }

  @Get(':id')
  getOneUser(@Param() id: string) {
    return this.userClient.send(USER_PATTERNS.FIND_ONE, id);
  }

  @Post('/login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.userClient.send(USER_PATTERNS.LOGIN, loginUserDto);
  }

  @Patch()
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.userClient.send(USER_PATTERNS.UPDATE, updateUserDto);
  }
}
