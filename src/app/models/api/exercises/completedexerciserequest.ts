import { Exercise } from '../../exercise';

export class CompletedExerciseRequest {
  notes: string;

  constructor(exercise: Exercise) { 
    exercise.notes ? this.notes = exercise.notes : this.notes = "";
  }
}