import { User } from './user';

export class Set {
  name: string;
  createdBy: User;
  type: SetType;
  units: SetUnits;
  reps: number;
  created: Date;
  description: string;

  constructor() {}
}
