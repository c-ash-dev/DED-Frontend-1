import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { MockWorkouts } from 'src/app/models/mock/mock_workouts';
import { WorkoutsService } from 'src/app/services/workouts.service';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  public workouts: Workout[] = [];

  constructor(private workoutService: WorkoutsService) { }

  ngOnInit() {

    // TODO: Get by user ID instead of origin ID
    this.workoutService.findByOriginId(-1).subscribe((response: Workout[]) => {
      
      // TODO: Check for completed
      response.forEach(workout => {
        this.workouts.push(new Workout(workout));
      });
    });

    // TODO: Replace this with API call
    // MockWorkouts.forEach(workout => {
    //   if(workout.completed_time != null){
    //     this.workouts.push(workout);
    //   }
    // });
  }

}
