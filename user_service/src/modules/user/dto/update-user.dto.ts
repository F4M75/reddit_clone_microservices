import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '@f4m75/shared-service-contract';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
