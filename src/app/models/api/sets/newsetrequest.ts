export class NewSetRequest {
  exercise_id: number;
  style: string;
  goal_reps: number;
  goal_value: number;
  unit: string;
  description: string;
  origin_id: number;

  constructor() { 
    this.origin_id = -1;
  }
}