import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-createexercise',
  templateUrl: './createexercise.component.html',
  styleUrls: ['./createexercise.component.scss']
})
export class CreateexerciseComponent implements OnInit {

  @Input() workout: Workout;
  
  public exercise: Exercise;
  public exerciseTypes: Array<any> = Exercise.getTypeDropdownItems();

  constructor(private exerciseService: ExercisesService) {
    this.exercise = new Exercise();
  }

  ngOnInit() {
  }

  public receiveSelectedType($event: string) {
    this.exercise.exercise_type = $event;
  }

  public addExercise() {
    this.exercise.workout_id = this.workout.id;
    this.exerciseService.createExercise(this.exercise).subscribe((response: Exercise) => {
      this.workout.exercises.push(new Exercise(response));
    });
  }

  public removeExercise(index: number) {
    this.exerciseService.deleteExercise(this.workout.exercises[index].id).subscribe(() => {
      this.workout.exercises.splice(index, 1);
    })
  }
}
