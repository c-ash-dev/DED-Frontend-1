import { User } from './user';
import { Exercise } from './exercise';

export class Workout {
  id: number;
  origin_id: number;

  exercises: Exercise[];

  name: string;
  description: string;
  notes: string;

  created_time: Date;
  completed_time: Date;
  created_by: User;
  completed_by: User;

  constructor() {
    this.name = '';
    this.description = '';
    this.exercises = [];
  }
}
