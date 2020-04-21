import { Component, OnInit } from '@angular/core';
import { WORKOUTS } from '../selectworkout/mock-workouts';
import { EXERCISES } from './mock-exercises'


@Component({
  selector: 'app-workoutdetails',
  templateUrl: './workoutdetails.component.html',
  styleUrls: ['./workoutdetails.component.scss']
})

export class WorkoutDetailsComponent implements OnInit {

  workouts = WORKOUTS;
  exercises = EXERCISES;

  constructor(){

  }

  ngOnInit() {}
}
