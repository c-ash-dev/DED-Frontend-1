import { User } from './user';

export class Set {
  id: number;
  origin_id: number;

  sets: Array<Set>;

  name: string;
  type: SetType;
  units: SetUnits;
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
}
