import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ErrorHandler } from 'src/core/handlers/error-handler.handler';
import { CoreController } from 'src/core/utils/core-controller.controller';
import { Exercise } from './entities/exercise.entity';

@Controller('exercises')
export class ExercisesController extends CoreController<
  Exercise,
  ExercisesService,
  CreateExerciseDto,
  UpdateExerciseDto
> {
  constructor(private readonly exercisesService: ExercisesService) {
    super(exercisesService);
  }
}
