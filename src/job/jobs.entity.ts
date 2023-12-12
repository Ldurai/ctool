import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jobs')
export class JobEntity {
  @PrimaryGeneratedColumn()
  job_id: number;

  @Column()
  job_title: string;

  @Column()
  job_description: string;
}
