import { User } from './user';
import { Set } from './set';
import { DateUtils } from '../utils/date.utils';

export class Exercise {
  id: number;
  origin_id: number;
  workout_id: number;

  name: string;
  exercise_type: string;
  description: string;
  notes: string;

  created_time: Date;
  completed_time: Date;
  created_by: User;
  sets: Set[] = [];

  constructor( exercise: Exercise = null) {

    console.log(exercise);

    if (exercise) {
      this.id = exercise.id;
      this.origin_id = exercise.origin_id;
      this.name = exercise.name;
      this.exercise_type = exercise.exercise_type;
      this.description = exercise.description;
      this.notes = exercise.notes;
      this.created_time = DateUtils.CheckAndConvertRustTime(exercise.created_time);
      this.completed_time = DateUtils.CheckAndConvertRustTime(exercise.completed_time);
      this.created_by = exercise.created_by;
      this.sets = exercise.sets;
    } else {
      this.id = 0;
      this.origin_id = 0;
      this.name = '';
      this.exercise_type = '';
      this.description = '';
      this.notes = '';
    }

    this.sets = [];
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
