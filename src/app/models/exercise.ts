import { User } from './user';
import { Set } from './set';

export class Exercise {
  id: number;
  origin_id: number;

  sets: Array<Set>;

  name: string;
  type: ExerciseType;
  description: string;
  notes: string;

  created_time: Date;
  completed_time: Date;
  created_by: User;
  completed_by: User;

  constructor() {}
}
