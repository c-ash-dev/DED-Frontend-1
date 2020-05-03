import { Component, OnInit } from '@angular/core';

import { Workout } from 'src/app/models/workout';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { NewWorkoutRequest } from 'src/app/models/api/workouts/newworkoutrequest';
import { NewWorkout } from 'src/app/models/api/workouts/newworkout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createworkout',
  templateUrl: './createworkout.component.html',
  styleUrls: ['./createworkout.component.scss']
})
export class CreateworkoutComponent implements OnInit {
  public workout: Workout;
  public workoutName: string;
  public workoutDesc: string;

  constructor(
    private workoutService: WorkoutsService,
    private router: Router) {
  }

  ngOnInit() {
  }

  createWorkout() {
    const workoutReq = new NewWorkoutRequest();
    workoutReq.user_id = +localStorage.getItem("logged-in");
    workoutReq.name = this.workoutName;

    if(this.workoutDesc) {
      workoutReq.description = this.workoutDesc;
    }
    else {
      workoutReq.description = "";
    }

    this.workoutService.createWorkout(workoutReq).subscribe((createResponse: Workout) => {
      this.workout = new Workout(createResponse);
    });
  }

  discardWorkout() {
    this.workoutService.deleteWorkout(this.workout.id).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
