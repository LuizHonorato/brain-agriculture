import 'reflect-metadata';
import '@/core/infrastructure/configuration/container';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './global-filter.exception';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './documentation/setup.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());

  const configService = app.get(ConfigService);
  const port = configService.get<number>('APP_PORT', 3333);

  setupSwagger(app);

  await app.listen(port);

  console.log(
    `Brain Agriculture server application is running on port ${port} 🚀️`,
  );
}

void bootstrap();
