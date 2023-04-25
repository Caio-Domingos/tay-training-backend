import { Module } from '@nestjs/common';
import { TrainingSheetService } from './training-sheet.service';
import { TrainingSheetController } from './training-sheet.controller';

@Module({
  controllers: [TrainingSheetController],
  providers: [TrainingSheetService]
})
export class TrainingSheetModule {}
