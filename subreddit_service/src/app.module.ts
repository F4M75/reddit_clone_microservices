import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SubredditModule } from './modules/subreddit/subreddit.module';
import { MembershipModule } from './modules/membership/membership.module';

@Module({
  imports: [ConfigModule.forRoot(), SubredditModule, MembershipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
