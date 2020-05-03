import { User } from './user';
import { Exercise } from './exercise';
import { DateUtils } from '../utils/date.utils';

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

  constructor(workout: Workout) {
    this.exercises = [];

    if(workout) {
      this.id = workout.id;
      this.origin_id = workout.origin_id;
      this.name = workout.name;
      this.description = workout.description;
      this.notes = workout.notes;
      this.created_time = DateUtils.checkAndConvertRustTime(workout.created_time);
      this.created_by = workout.created_by;
      this.completed_time = DateUtils.checkAndConvertRustTime(workout.completed_time);
    }
    else {
      this.name = "";
      this.description = "";
    }
  }
}
