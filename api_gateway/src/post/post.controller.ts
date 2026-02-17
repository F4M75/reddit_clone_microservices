import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  CreatePostDto,
  POST_PATTERNS,
  UpdatePostDto,
} from '@f4m75/shared-service-contract';
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

  @Get()
  getAllPost() {
    return this.postClient.send(POST_PATTERNS.FIND_ALL, {});
  }

  @Get(':id')
  getOnePost(@Param('id') id: string) {
    return this.postClient.send(POST_PATTERNS.FIND_ONE, id);
  }

  @Patch()
  updatePost(@Body() updatePostDto: UpdatePostDto) {
    return this.postClient.send(POST_PATTERNS.UPDATE, updatePostDto);
  }
}
