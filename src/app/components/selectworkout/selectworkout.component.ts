import { Component, OnInit } from '@angular/core';
import { MockWorkouts } from '../../models/mock/mock_workouts';
import { Workout } from 'src/app/models/workout';
import { WorkoutsService } from 'src/app/services/workouts.service'

@Component({
  selector: 'app-selectworkout',
  templateUrl: './selectworkout.component.html',
  styleUrls: ['./selectworkout.component.scss']
})

export class SelectWorkoutComponent implements OnInit {

  public workouts: Workout[] = [];

  constructor(private workoutService: WorkoutsService) {

  }

  ngOnInit() {

    // TODO: Get workouts by user
    this.workoutService.findByOriginId(-1).subscribe((response: Workout[]) => {
      
      response.forEach(workout => {
        // Only add incomplete workouts
        let toAdd = new Workout(workout);
        if(toAdd.origin_id == -1){
          this.workouts.push(new Workout(workout));
        }
      });
    });
  }

  deleteWorkout(index:number) {
    this.workoutService.deleteWorkout(this.workouts[index].id).subscribe(()=>{
      this.workouts.splice(index, 1);
    });
  }
}
