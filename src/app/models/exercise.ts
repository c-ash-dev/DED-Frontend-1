import { User } from './user';
import { Set } from './set';

export class Exercise {
  name: string;
  createdBy: User;
  sets: Array<Set>;
  type: ExerciseType;
  created: Date;
  description: string;
}
