import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-createexercise',
  templateUrl: './createexercise.component.html',
  styleUrls: ['./createexercise.component.scss']
})
export class CreateexerciseComponent implements OnInit {

  @Input() exercises: Array<Exercise>;
  public exercise: Exercise;
  public exerciseTypes: Array<any>;

  constructor() {
    this.exercise = new Exercise();
    this.exerciseTypes = this.exercise.getTypeDropdownItems();
  }

  ngOnInit() {
  }

  public receiveSelectedType($event: string) {
    this.exercise.type = $event;
  }

  public addExercise() {
    const newExercise = new Exercise(this.exercise);
    this.exercises.push(newExercise);
  }

  public removeExercise(index: number) {
    this.exercises.splice(index, 1);
  }

}
