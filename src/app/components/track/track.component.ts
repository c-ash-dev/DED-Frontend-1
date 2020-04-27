import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { MockWorkouts } from 'src/app/models/mock/mock_workouts';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  public workouts: Workout[] = [];

  constructor() { }

  ngOnInit() {
    
    // TODO: Replace this with API call
    MockWorkouts.forEach(workout => {
      if(workout.completed_time != null){
        this.workouts.push(workout);
      }
    });
  }

}
