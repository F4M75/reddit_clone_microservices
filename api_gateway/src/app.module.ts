import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
