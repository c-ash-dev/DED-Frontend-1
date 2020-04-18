export class CompletedSet {
  id: number;
  origin_id: number;
  exercise_id: number;
  style: string;
  goal_reps: number;
  goal_value: number;
  completed_reps: number;
  completed_value: number;
  unit: string;
  description: string;
  created_or_completed: Date;
  
  constructor() { }
}