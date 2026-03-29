import { Injectable } from '@nestjs/common';
import { CreateSubredditDto } from '@f4m75/shared-service-contract';
import { UpdateSubredditDto } from '@f4m75/shared-service-contract';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubredditService {
  constructor(private prisma: PrismaService) {}
  create(createSubredditDto: CreateSubredditDto) {
    const data = {
      name: createSubredditDto.name,
      description: createSubredditDto.description,
      topic: createSubredditDto.topic,
      type: createSubredditDto.type,
    };

    return this.prisma.subreddit.create({ data });
  }

  findAll() {
    return this.prisma.subreddit.findMany();
  }

  findOne(id: string) {
    return this.prisma.subreddit.findUnique({ where: { id } });
  }

  update(updateSubredditDto: UpdateSubredditDto) {
    return this.prisma.subreddit.update({
      where: {
        id: updateSubredditDto.id,
      },
      data: updateSubredditDto,
    });
  }

  remove(id: string) {
    return this.prisma.subreddit.delete({ where: { id } });
  }
}
