import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { WorkspacesController } from './workspaces/workspaces.controller';
import { WorkspacesService } from './workspaces/workspaces.service';
import { UsersService } from './users/users.service';

/**
 * Provider
 * : 연결되어있는 것을 보고 의존성 주입을 해줌
 * : 현재는 AppService만 의존성 주입
 */
@Module({
  imports: [ConfigModule.forRoot(), UsersModule, ChannelsModule, DmsModule],
  controllers: [AppController, WorkspacesController],
  providers: [AppService, WorkspacesService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
