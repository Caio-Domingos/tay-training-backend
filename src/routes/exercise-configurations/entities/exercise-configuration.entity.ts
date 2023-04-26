import { CoreEntity } from 'src/core/models/CoreEntity.model';
import { ExerciseGroup } from 'src/routes/exercise-groups/entities/exercise-group.entity';
import { ExerciseMethod } from 'src/routes/exercise-method/entities/exercise-method.entity';
import { Exercise } from 'src/routes/exercises/entities/exercise.entity';
import { Method } from 'src/routes/methods/entities/method.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';

@Entity({ name: 'exercise_configurations' })
export class ExerciseConfiguration extends CoreEntity {
  @Column({ type: 'varchar', length: 255 })
  series: string;

  @Column({ name: 'repetitions', type: 'varchar', length: 255 })
  reps: string;

  @Column({ type: 'varchar', length: 255 })
  rest: string;

  // FK's
  @Column({ name: 'exercise_method_id' })
  exerciseMethodId: number;

  @Column({ name: 'exercise_id' })
  exerciseId: number;

  @Column({ name: 'method_id' })
  methodId: number;

  // Relations

  @ManyToOne(
    () => ExerciseMethod,
    (exerciseMethod: ExerciseMethod) => exerciseMethod.exerciseConfigurations,
  )
  @JoinColumn({ name: 'exercise_method_id', referencedColumnName: 'id' })
  exerciseMethod: Relation<ExerciseMethod>;

  @ManyToOne(
    () => Exercise,
    (exerciseMethod: Exercise) => exerciseMethod.exerciseConfigurations,
  )
  @JoinColumn({ name: 'exercise_id', referencedColumnName: 'id' })
  exercise: Relation<Exercise>;

  @ManyToOne(
    () => Method,
    (exerciseMethod: Method) => exerciseMethod.exerciseConfigurations,
  )
  @JoinColumn({ name: 'method_id', referencedColumnName: 'id' })
  method: Relation<Method>;
}
