import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto,
} from '@f4m75/shared-service-contract';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        password: hashedPassword,
        birthDate: createUserDto.bithdate,
        gender: createUserDto.gender,
      },
    });

    return user;
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.prisma.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new BadRequestException('Wrong Credentials');
    }

    return {
      token: this.getJwtToken(user.id, user.email),
      user: user,
    };
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: updateUserDto.id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }

  getJwtToken(id: string, email: string) {
    const token = this.jwtService.sign({ id, email });
    return token;
  }
}
