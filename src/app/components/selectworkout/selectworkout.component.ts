import { Component, OnInit } from '@angular/core';
import { MockWorkouts } from '../../models/mock/mock_workouts';
import { Workout } from '../../models/workout';

@Component({
  selector: 'app-selectworkout',
  templateUrl: './selectworkout.component.html',
  styleUrls: ['./selectworkout.component.scss']
})

export class SelectWorkoutComponent implements OnInit {

  public workouts: Workout[] = [];

  constructor() {

  }

  ngOnInit() {

    // TODO: Replace this with API call
    MockWorkouts.forEach(workout => {
      if(workout.created_time != null)
        this.workouts.push(workout);
      }
    );
  }

}
