export class CompletedExercise {
  id: number;
  origin_id: number;
  workout_id: number;
  name: string;
  exercise_type: number;
  description: string;
  notes: string;
  created_time: Date;
  completed_time: Date;

  constructor() { }
}