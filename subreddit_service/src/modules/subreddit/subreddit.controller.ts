import { Controller } from '@nestjs/common';
import { SubredditService } from './subreddit.service';
import {
  CreateSubredditDto,
  SUBREDDIT_PATTERNS,
  UpdateSubredditDto,
} from '@f4m75/shared-service-contract';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('subreddit')
export class SubredditController {
  constructor(private readonly subredditService: SubredditService) {}

  @MessagePattern(SUBREDDIT_PATTERNS.CREATE)
  create(@Payload() createSubredditDto: CreateSubredditDto) {
    return this.subredditService.create(createSubredditDto);
  }

  @MessagePattern(SUBREDDIT_PATTERNS.FIND_ALL)
  findAll() {
    return this.subredditService.findAll();
  }

  @MessagePattern(SUBREDDIT_PATTERNS.FIND_ONE)
  findOne(@Payload('id') id: string) {
    return this.subredditService.findOne(id);
  }

  @MessagePattern(SUBREDDIT_PATTERNS.UPDATE)
  update(@Payload() updateSubredditDto: UpdateSubredditDto) {
    return this.subredditService.update(updateSubredditDto);
  }

  @MessagePattern(SUBREDDIT_PATTERNS.DELETE)
  remove(@Payload('id') id: string) {
    return this.subredditService.remove(id);
  }
}
