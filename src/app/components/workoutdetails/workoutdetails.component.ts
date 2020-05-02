import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Workout } from 'src/app/models/workout';
import { Exercise } from 'src/app/models/exercise';
import { Set } from 'src/app/models/set';

import { MockWorkouts } from '../../models/mock/mock_workouts';
import { MockExercises } from '../../models/mock/mock_exercises'
import { MockSets } from 'src/app/models/mock/mock_sets';

@Component({
  selector: 'app-workoutdetails',
  templateUrl: './workoutdetails.component.html',
  styleUrls: ['./workoutdetails.component.scss']
})

export class WorkoutDetailsComponent implements OnInit {

  public id: number;
  public setUnits: Array<any>;

  public workout: Workout;
  public sets: Set[] = MockSets;


  constructor(private activated_route: ActivatedRoute){
    this.id = this.activated_route.snapshot.params.id;
    this.setUnits = Set.getUnitsDropdownItems();

    // TODO: Replace this with proper API call
    MockWorkouts.forEach(workout => {
      if(workout.id == this.id) {
        this.workout = workout;
        this.workout.exercises = [];

        // TODO: Replace this with proper API call
        MockExercises.forEach(exercise => {
          if(exercise.workout_id == this.id) {
            this.workout.exercises.push(exercise);
            exercise.sets = [];

            // TODO: Replace this with a proper API call
            MockSets.forEach(set => {
              if(set.exercise_id == exercise.id) {
                exercise.sets.push(set);
              }
            })
          }
        });

        return;
      }
    });
  }



  // public receiveSelectedUnits($event: string) {
  //   this.sets.units = $event;
  // }

  ngOnInit() {}
}
