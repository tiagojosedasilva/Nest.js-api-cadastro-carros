import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserInterceptor } from './interceptors/user.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // console.log(process.env.TYPEORM_SECRET)
  app.useGlobalInterceptors(new UserInterceptor());
}
bootstrap();
