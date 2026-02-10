// src/prisma/prisma.service.ts (adjust path based on your file structure)
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
    super({ adapter });
  }

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
