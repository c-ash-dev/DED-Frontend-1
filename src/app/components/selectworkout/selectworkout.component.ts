import { Component, OnInit } from '@angular/core';
import { WORKOUTS } from './mock-workouts';

@Component({
  selector: 'app-selectworkout',
  templateUrl: './selectworkout.component.html',
  styleUrls: ['./selectworkout.component.scss']
})

export class SelectWorkoutComponent implements OnInit {

  workouts = WORKOUTS;
  selectedWorkout: Workout;

  constructor() {

  }

  ngOnInit() {

  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

}
