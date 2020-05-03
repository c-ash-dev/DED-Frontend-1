import { Exercise } from '../../exercise';

export class NewExerciseRequest {
  origin_id: number = -1;
  workout_id: number;
  name: string;
  exercise_type: string;
  description: string;
  notes: string = "";

  constructor(exercise: Exercise) {
    this.workout_id = exercise.workout_id;
    this.name = exercise.name;
    this.exercise_type = exercise.exercise_type;

    if(exercise.description){
      this.description = exercise.description;
    }
    else {
      this.description = "";
    }
  }
}