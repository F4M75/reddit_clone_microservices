import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SubredditModule } from './modules/subreddit/subreddit.module';

@Module({
  imports: [ConfigModule.forRoot(), SubredditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
