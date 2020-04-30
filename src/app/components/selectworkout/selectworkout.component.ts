import { Component, OnInit } from '@angular/core';
import { MockWorkouts } from '../../models/mock_workouts';
import { Workout } from '../../models/workout';

@Component({
  selector: 'app-selectworkout',
  templateUrl: './selectworkout.component.html',
  styleUrls: ['./selectworkout.component.scss']
})

export class SelectWorkoutComponent implements OnInit {

  public workouts: Workout[] = MockWorkouts;
  selectedWorkout: Workout;
  // workouts = WORKOUTS;
  // selectedWorkout: Workout;
  // { id } = WORKOUTS;


  constructor() {

  }

  ngOnInit() {

  }

}
