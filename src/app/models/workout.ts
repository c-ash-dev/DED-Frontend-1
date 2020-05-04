import { User } from './user';
import { Exercise } from './exercise';
import { DateUtils } from '../utils/date.utils';

export class Workout {
  id: number;
  origin_id: number;
  user_id: number;

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
      this.user_id = workout.user_id;

      this.name = workout.name;
      this.description = workout.description;
      this.notes = workout.notes;

      this.created_time = DateUtils.checkAndConvertRustTime(workout.created_time);
      this.completed_time = DateUtils.checkAndConvertRustTime(workout.completed_time);
    
      if(this.created_time && this.completed_time){
        if(this.created_time.toString() == this.completed_time.toString()){
          this.completed_time = null;
        }
      }

      if(workout.exercises) {
        this.exercises = workout.exercises;
      }
    }
    else {
      this.id = -1;
      this.origin_id = -1;
      this.user_id = -1;

      this.name = "";
      this.description = "";
      this.notes = "";
    }
  }
}
