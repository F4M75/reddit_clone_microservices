// src/prisma/prisma.service.ts (adjust path based on your file structure)
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  transactionWithTimeout<T>(
    callback: (prisma: PrismaClient) => Promise<T>,
    timeout = 9000000,
  ): Promise<T> {
    return this.$transaction(callback, { timeout });
  }
}
