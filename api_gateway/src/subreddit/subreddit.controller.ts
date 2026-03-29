import {
  CreateSubredditDto,
  SUBREDDIT_PATTERNS,
} from '@f4m75/shared-service-contract';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('subreddit')
export class SubredditController {
  constructor(
    @Inject('SUBREDDIT_SERVICE') private readonly subredditClient: ClientProxy,
  ) {}

  @Post()
  createSubbreddit(@Body() createSubredditDto: CreateSubredditDto) {
    return this.subredditClient.send(
      SUBREDDIT_PATTERNS.CREATE,
      createSubredditDto,
    );
  }

  @Get()
  getAllSubreddit() {
    return this.subredditClient.send(SUBREDDIT_PATTERNS.FIND_ALL, {});
  }

  @Get(':id')
  getOneSubreddit(@Param('id') id: string) {
    return this.subredditClient.send(SUBREDDIT_PATTERNS.FIND_ONE, id);
  }
}
