import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Provider에 있는 의존성 주입 덕분에
 * AppService를 사용할 수 있음 (Nest에서 내부적으로 처리해줌)
 * : 덕분에 this.appService = AppService임을 알 수 있음
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
