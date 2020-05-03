import { Workout } from '../../workout';

export class CompletedWorkoutRequest {
  notes: string;

  constructor(workout: Workout) { 
    workout.notes ? this.notes = workout.notes : this.notes = "";
  }
}