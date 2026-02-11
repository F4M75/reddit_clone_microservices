import { Controller, Param } from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto,
  USER_PATTERNS,
} from '@f4m75/shared-service-contract';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(USER_PATTERNS.CREATE)
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern(USER_PATTERNS.LOGIN)
  login(@Payload() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  @MessagePattern(USER_PATTERNS.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(USER_PATTERNS.FIND_ONE)
  findOne(@Payload('id') id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern(USER_PATTERNS.UPDATE)
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  @MessagePattern(USER_PATTERNS.DELETE)
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
