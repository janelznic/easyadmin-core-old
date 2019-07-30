import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import CONFIG from './config';

const port = CONFIG.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const options = new DocumentBuilder()
    .setTitle('easyadmin-core API')
    .setDescription('README: https://github.com/janelznic/easyadmin-core')
    .setVersion('4.0')
    .addTag('users')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
}
bootstrap();
