import { User } from './user';

export class Set {
  id: number;
  origin_id: number;

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

  constructor() {}

  public getTypeDropdownItems(): Array<any> {
    const items: Array<any> = [
      { field: 'normal' },
      { field: 'warmup' },
      { field: 'cooldown' },
      { field: 'drop' },
      { field: 'fail' }
    ];
    return items;
  }

  public getUnitsDropdownItems(): Array<any> {
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
