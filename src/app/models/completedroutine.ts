import { User } from './user';
import { CompletedExercise } from './completedexercise';

export class CompletedRoutine {
  name: string;
  description: string;
  completedBy: User;
  completionTime: Date;
  exercises: Array<CompletedExercise>;
  notes: string;

  constructor() {}
}
