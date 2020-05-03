import { User } from './user';
import { Exercise } from './exercise';
import { DateUtils } from '../utils/date.utils';

export class Workout {
  id: number;
  origin_id: number;
  created_by: number;

  name: string;
  description: string;
  notes: string;

  created_time: Date;
  completed_time: Date;

  exercises: Exercise[];

  constructor(workout: Workout) {
    this.exercises = [];

    if(workout) {
      this.id = workout.id;
      this.origin_id = workout.origin_id;
      this.created_by = workout.created_by;

      this.name = workout.name;
      this.description = workout.description;
      this.notes = workout.notes;

      this.created_time = DateUtils.checkAndConvertRustTime(workout.created_time);
      this.completed_time = DateUtils.checkAndConvertRustTime(workout.completed_time);
    
      if(workout.exercises) {
        this.exercises = workout.exercises;
      }
    }
    else {
      this.id = -1;
      this.origin_id = -1;
      this.created_by = -1;

      this.name = "";
      this.description = "";
      this.notes = "";
    }
  }
}
