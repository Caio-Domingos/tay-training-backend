import { CoreEntity } from 'src/core/models/CoreEntity.model';
import { TrainingDay } from 'src/routes/training-day/entities/training-day.entity';
import { Column, Entity, OneToMany, Relation } from 'typeorm';

@Entity({ name: 'training_sheets' })
export class TrainingSheet extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  // FK's

  // Relations

  @OneToMany(
    () => TrainingDay,
    (trainingDay: TrainingDay) => trainingDay.trainingSheet,
    { cascade: true },
  )
  trainingDays: Relation<TrainingDay[]>;
}
