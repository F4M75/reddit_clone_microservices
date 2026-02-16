import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDto, POST_PATTERNS } from '@f4m75/shared-service-contract';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern(POST_PATTERNS.CREATE)
  create(@Payload() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
