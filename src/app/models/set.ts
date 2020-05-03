import { User } from './user';
import { DateUtils } from '../utils/date.utils';

export class Set {
  id: number;
  origin_id: number;
  exercise_id: number;
  created_by: number;

  style: string;
  unit: string;
  goal_reps: number;
  goal_value: number;
  completed_reps: number;
  completed_value: number;
  description: string;
  notes: string;

  created_or_completed: Date;

  constructor(set: Set = null) {
    if (set) {
      this.id = set.id;
      this.origin_id = set.origin_id;
      this.exercise_id = set.exercise_id;
      this.created_by = set.created_by;

      this.style = set.style;
      this.unit = set.unit;
      this.goal_reps = set.goal_reps;
      this.goal_value = set.goal_value;
      this.completed_reps = set.completed_reps;
      this.completed_value = set.completed_value;
      this.description = set.description;
      this.notes = set.notes;

      this.created_or_completed = DateUtils.checkAndConvertRustTime(set.created_or_completed);
    }
    else {
      this.id = -1;
      this.origin_id = -1;
      this.exercise_id = -1;
      this.created_by = -1;

      this.style = '';
      this.unit = '';
      this.goal_reps = 0;
      this.goal_value = 0;
      this.completed_reps = 0;
      this.completed_value = 0;
      this.description = '';
      this.notes = '';
    }
  }

  public static getTypeDropdownItems(): Array<any> {
    const items: Array<any> = [
      { field: 'normal' },
      { field: 'warmup' },
      { field: 'cooldown' },
      { field: 'drop' },
      { field: 'fail' }
    ];
    return items;
  } 

  public static getUnitsDropdownItems(): Array<any> {
    const items: Array<any> = [
      { field: 'Weight', header: true },
      { field: 'lbs' },
      { field: 'kg' },
      { field: 'Time', header: true },
      { field: 'seconds' },
      { field: 'minutes' },
      { field: 'hours' },
      { field: 'Distance (US)', header: true },
      { field: 'ft' },
      { field: 'yards' },
      { field: 'miles' },
      { field: 'Distance (Metric)', header: true },
      { field: 'm' },
      { field: 'km' },
    ];
    return items;
  }
}
