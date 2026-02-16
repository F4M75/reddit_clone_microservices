import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePostDto, POST_PATTERNS } from '@f4m75/shared-service-contract';
import { ClientProxy } from '@nestjs/microservices';

@Controller('post')
export class PostController {
  constructor(
    @Inject('POST_SERVICE') private readonly postClient: ClientProxy,
  ) {}

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postClient.send(POST_PATTERNS.CREATE, createPostDto);
  }
}
