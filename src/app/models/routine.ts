import { User } from './user';
import { Exercise } from './exercise';

export class Routine {
  id: number;
  origin_id: number;

  exercises: Array<Exercise>;

  name: string;
  description: string;
  notes: string;

  created_time: Date;
  completed_time: Date;
  created_by: User;
  completed_by: User;

  constructor() {}
}
