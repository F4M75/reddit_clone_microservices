import { Module } from '@nestjs/common';
import { SubredditService } from './subreddit.service';
import { SubredditController } from './subreddit.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUBREDDIT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3003,
        },
      },
    ]),
  ],
  controllers: [SubredditController],
  providers: [SubredditService],
})
export class SubredditModule {}
