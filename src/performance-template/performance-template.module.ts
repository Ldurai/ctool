import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceTemplateService } from './performance-template.service';
import { PerformanceTemplateController } from './performance-template.controller';
import { PerformanceTemplateEntity } from './performance-template.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerformanceTemplateEntity]),
  ],
  providers: [PerformanceTemplateService],
  controllers: [PerformanceTemplateController],
})
export class PerformanceTemplateModule {}
