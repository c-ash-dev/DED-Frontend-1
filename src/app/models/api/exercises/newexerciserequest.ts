import { Exercise } from '../../exercise';

export class NewExerciseRequest {
  origin_id: Number;
  workout_id: number;
  name: string;
  exercise_type: string;
  description: string;
  notes: string;

  constructor(exercise: Exercise) {
    exercise.origin_id ? this.origin_id = exercise.origin_id : this.origin_id = -1;
    
    this.workout_id = exercise.workout_id;
    this.name = exercise.name;
    this.exercise_type = exercise.exercise_type;

    exercise.description ? this.description = exercise.description : this.description = "";
    
    this.notes = "";
  }
}