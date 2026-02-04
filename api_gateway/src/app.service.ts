import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly clientUserService: ClientProxy,
  ) {}

  pingServiceA() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.clientUserService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs })),
      );
  }
}
