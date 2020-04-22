import { Component, OnInit } from '@angular/core';
import { MockWorkouts } from '../../models/mock_workouts';
import { Workout } from '../../models/workout';

@Component({
  selector: 'app-selectworkout',
  templateUrl: './selectworkout.component.html',
  styleUrls: ['./selectworkout.component.scss']
})

export class SelectWorkoutComponent implements OnInit {

  workouts = MockWorkouts;
  selectedWorkout: Workout;

  constructor() {

  }

  ngOnInit() {

  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

}
