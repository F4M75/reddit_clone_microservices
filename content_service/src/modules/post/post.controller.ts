import { Controller, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import {
  CreatePostDto,
  POST_PATTERNS,
  UpdatePostDto,
} from '@f4m75/shared-service-contract';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern(POST_PATTERNS.CREATE)
  create(@Payload() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @MessagePattern(POST_PATTERNS.FIND_ALL)
  findAll() {
    return this.postService.findAll();
  }

  @MessagePattern(POST_PATTERNS.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.postService.findOne(id);
  }

  @MessagePattern(POST_PATTERNS.UPDATE)
  update(@Payload() updatePostDto: UpdatePostDto) {
    return this.postService.update(updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
