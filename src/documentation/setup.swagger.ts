import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
import type { OpenAPIObject } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('Brain Agriculture API')
    .setDescription(
      'This API is used to manage the registration of rural producers.',
    )
    .setVersion('1.0')
    .addServer('http://localhost:3333', 'Local server')
    .build();

  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
