import { User } from './user';
import { Set } from './set';
import { DateUtils } from '../utils/date.utils';

export class Exercise {
  id: number;
  origin_id: number;
  workout_id: number;
  created_by: number;

  name: string;
  exercise_type: string;
  description: string;
  notes: string;

  create_time: Date;
  complete_time: Date;
  
  sets: Set[];

  constructor( exercise: Exercise = null) {
    this.sets = [];

    if (exercise) {
      this.id = exercise.id;
      this.origin_id = exercise.origin_id;
      this.workout_id = exercise.workout_id;
      this.created_by = exercise.created_by;

      this.name = exercise.name;
      this.exercise_type = exercise.exercise_type;
      this.description = exercise.description;
      this.notes = exercise.notes;

      this.create_time = DateUtils.checkAndConvertRustTime(exercise.create_time);
      this.complete_time = DateUtils.checkAndConvertRustTime(exercise.complete_time);

      if(this.create_time && this.complete_time){
        if(this.create_time.toString() == this.complete_time.toString()) {
          this.complete_time = null;
        }
      } 
    
      if(exercise.sets) {
        this.sets = exercise.sets;
      }
    } 
    else {
      this.id = -1;
      this.origin_id = -1;
      this.workout_id = -1;
      this.created_by = -1;

      this.name = '';
      this.exercise_type = '';
      this.description = '';
      this.notes = '';
    }
  }

  public static getTypeDropdownItems(): Array<any> {
    const items: Array<any> = [
      { field: 'strength' },
      { field: 'cardio' },
      { field: 'mobility' },
      { field: 'skill' },
      { field: 'activity' },
    ];

    return items;
  }
}
