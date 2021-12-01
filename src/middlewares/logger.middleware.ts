import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, response, Response } from 'express';

/**
 * 실무에서 적용할때는
 * NestMorgan 사용
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    // 응답이 끝났을 때
    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      /**
       * Context가 필요 없는경우
       * - Logger.log()로 사용한다
       * - Context는 어떤 로그인지 알 수 있다 (HTTP는 HTTP와 관련된 로그)
       */
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });
    next();
  }
}
