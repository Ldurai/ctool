import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceCycleService } from './performance-cycle.service';
import { PerformanceCycleController } from './performance-cycle.controller';
import { PerformanceCycleEntity } from './performance-cycle.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerformanceCycleEntity]),
  ],
  providers: [PerformanceCycleService],
  controllers: [PerformanceCycleController],
})
export class PerformanceCycleModule {}
