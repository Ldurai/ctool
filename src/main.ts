import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // You can pass specific configurations as needed
  //Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => {
      const messages = errors.map(error => 
        Object.values(error.constraints).join(', ')
      ).join('. ');
      return new BadRequestException(messages);
    },
  }));
  await app.listen(3000);
}
bootstrap();
