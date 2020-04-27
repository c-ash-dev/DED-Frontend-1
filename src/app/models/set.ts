import { User } from './user';

export class Set {
  id: number;
  origin_id: number;
  exercise_id: number;

  type: string;
  units: string;
  goal_reps: number;
  goal_value: number;
  reps: number;
  value: number;
  description: string;
  notes: string;

  created_time: Date;
  completed_time: Date;
  created_by: User;
  completed_by: User;

  constructor(set: Set = null) {
    if (set) {
      this.id = set.id;
      this.origin_id = set.origin_id;
      this.type = set.type;
      this.units = set.units;
      this.goal_reps = set.goal_reps;
      this.goal_value = set.goal_value;
      this.reps = set.reps;
      this.value = set.value;
      this.description = set.description;
      this.notes = set.notes;
      this.created_time = set.created_time;
      this.completed_time = set.completed_time;
      this.created_by = set.completed_by;
      this.completed_by = set.completed_by;
    } else {
      this.id = 0;
      this.origin_id = 0;
      this.type = '';
      this.units = '';
      this.goal_reps = 0;
      this.goal_value = 0;
      this.reps = 0;
      this.value = 0;
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
