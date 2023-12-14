import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceCycleService } from './performance-cycle.service';
import { PerformanceCycleController } from './performance-cycle.controller';
import { PerformanceCycleEntity } from './performance-cycle.entity';
import { PerformanceCycleResolver } from './performance-cycle.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerformanceCycleEntity]),
  ],
  providers: [PerformanceCycleService, PerformanceCycleResolver],
  controllers: [PerformanceCycleController],
})
export class PerformanceCycleModule {}
