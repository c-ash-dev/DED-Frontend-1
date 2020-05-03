import { Component, OnInit } from '@angular/core';

import { Workout } from 'src/app/models/workout';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { NewWorkoutRequest } from 'src/app/models/api/workouts/newworkoutrequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createworkout',
  templateUrl: './createworkout.component.html',
  styleUrls: ['./createworkout.component.scss']
})
export class CreateworkoutComponent implements OnInit {
  public workout: Workout;

  constructor(
    private workoutService: WorkoutsService,
    private router: Router) {
      this.workout = new Workout(null);
  }

  ngOnInit() {
  }

  createWorkout() {
    this.workout.created_by = +localStorage.getItem("logged-in");
    this.workoutService.createWorkout(this.workout).subscribe((createResponse: Workout) => {
      this.workout = new Workout(createResponse);
    });
  }

  discardWorkout() {
    this.workoutService.deleteWorkout(this.workout.id).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
