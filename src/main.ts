import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import CONFIG from './config';

const port = CONFIG.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
