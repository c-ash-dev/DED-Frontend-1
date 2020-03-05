import { User } from './user';

export class CompletedSet {
  name: string;
  type: SetType;
  value: number; // The number that relates to units (25 lbs, 3 miles)
  units: SetUnits;
  reps: number;
  completedReps: number;
  description: string;
  completedBy: User;
  completionTime: Date;
  notes: string;

  constructor() {}
}
