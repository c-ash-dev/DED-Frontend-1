export class CompletedWorkout {
  id: number;
  origin_id: number;
  user_id: number;
  name: string;
  description: string;
  notes: string;
  created_time: Date;
  completed_time: Date;

  constructor() { }
}