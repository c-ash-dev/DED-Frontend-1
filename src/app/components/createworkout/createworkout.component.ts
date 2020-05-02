import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-createworkout',
  templateUrl: './createworkout.component.html',
  styleUrls: ['./createworkout.component.scss']
})
export class CreateworkoutComponent implements OnInit {
  public workout: Workout;
  public workoutName: string;
  public workoutDesc: string;

  constructor() {
  }

  ngOnInit() {
  }

  createWorkout() {
    this.workout = new Workout();
    this.workout.name = this.workoutName;
    this.workout.description = this.workoutDesc;
  }

}
