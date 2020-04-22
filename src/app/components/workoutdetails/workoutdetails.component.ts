import { Component, OnInit } from '@angular/core';
import { MockWorkouts } from '../../models/mock_workouts';
import { MockExercises } from '../../models/mock_exercises'
import { Workout } from 'src/app/models/workout';
import { Exercise } from 'src/app/models/exercise';


@Component({
  selector: 'app-workoutdetails',
  templateUrl: './workoutdetails.component.html',
  styleUrls: ['./workoutdetails.component.scss']
})

export class WorkoutDetailsComponent implements OnInit {

  public workouts: Workout[] = MockWorkouts;
  public exercises: Exercise[] = MockExercises;

  constructor(){

  }

  ngOnInit() {}
}
