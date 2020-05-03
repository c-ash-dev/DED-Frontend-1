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
    this.workoutService.findByOriginId(-1).subscribe((originWorkoutResponse: Workout[]) => {
      originWorkoutResponse.forEach(originWorkout => {
        this.workoutService.findByOriginId(originWorkout.id).subscribe((completeWorkoutResp: Workout[]) => {
          completeWorkoutResp.forEach(workout => {
            let newWorkout = new Workout(workout);
            if(newWorkout.completed_time){
              this.workouts.push(newWorkout);
            }
          });
        });
      });
    });
  }

  deleteWorkout(index: number) {
    this.workoutService.deleteWorkout(this.workouts[index].id).subscribe(()=>{
      this.workouts.splice(index, 1);
    });
  }
}
