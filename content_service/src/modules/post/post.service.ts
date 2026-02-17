import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from '@f4m75/shared-service-contract';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    const data = {
      userId: createPostDto.userId,
      body: createPostDto.body,
      title: createPostDto.title,
    };

    return this.prisma.post.create({ data });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  update(updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: {
        id: updatePostDto.id,
      },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
