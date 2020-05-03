import { Workout } from '../../workout';

export class NewWorkoutRequest {
  origin_id: number;
  user_id: number;
  name: string;
  description: string;
  notes: string;

  constructor(workout: Workout) {
    this.origin_id = -1;
    this.user_id = workout.created_by;
    this.name = workout.name;

    workout.description ? this.description = workout.description : this.description = "";

    this.notes = "";
  }
}