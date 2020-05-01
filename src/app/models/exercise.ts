import { User } from './user';
import { Set } from './set';

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
  completed_by: User;

  sets: Set[];

  constructor( exercise: Exercise = null) {
    if (exercise) {
      this.id = exercise.id;
      this.origin_id = exercise.origin_id;
      this.name = exercise.name;
      this.exercise_type = exercise.exercise_type;
      this.description = exercise.description;
      this.notes = exercise.notes;
      this.created_time = exercise.created_time;
      this.completed_time = exercise.completed_time;
      this.created_by = exercise.completed_by;
      this.completed_by = exercise.completed_by;
    } else {
      this.id = 0;
      this.origin_id = 0;
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
