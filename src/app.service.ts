import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

/**
 * Services
 * : 요청, 응답에 대해서는 모름
 * => req, res 없는게 좋음
 * => 실제로 해야할 일을 구현
 * Controllers
 * : req, res에 대해서 안다
 * => 실제 요청에서 조작해야 할 내용을 Services에 넘긴다
 * Injectable
 * : provider와 같은 개념
 * : 사용하면 무조건 Module에 넣어야 사용 가능
 */
@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}
  getHello(): string {
    this.usersService.getUser();
    return process.env.SECRET;
  }
  // getHello(): string {
  //   return 'Hello World!';
  // }
}
