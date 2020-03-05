import { User } from './user';
import { Exercise } from './exercise';
import { CompletedSet } from './completedset';

export class CompletedExercise {
  name: string;
  type: ExerciseType;
  description: string;
  completedBy: User;
  completionTime: Date;
  sets: Array<CompletedSet>;
  notes: string;

  constructor() {}
}
