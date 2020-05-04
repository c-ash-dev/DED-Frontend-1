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
    const userID = +localStorage.getItem("logged-in");
    this.workoutService.findByUserId(userID).subscribe((respWorkout: Workout[]) => {
      respWorkout.forEach(workout => {
        workout = new Workout(workout);
        if(workout.completed_time && workout.origin_id != -1){
          this.workouts.push(workout);
        }
      });
    });
  }

  deleteWorkout(index: number) {
    this.workoutService.deleteWorkout(this.workouts[index].id).subscribe(()=>{
      this.workouts.splice(index, 1);
    });
  }
}
