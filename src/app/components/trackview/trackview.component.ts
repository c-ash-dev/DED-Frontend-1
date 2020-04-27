import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MockWorkouts } from 'src/app/models/mock/mock_workouts';
import { Workout } from 'src/app/models/workout';

import { MockExercises } from 'src/app/models/mock/mock_exercises';
import { Exercise } from 'src/app/models/exercise';

import { MockSets } from 'src/app/models/mock/mock_sets';
import { Set } from 'src/app/models/set'

@Component({
  selector: 'app-trackview',
  templateUrl: './trackview.component.html',
  styleUrls: ['./trackview.component.scss']
})
export class TrackviewComponent implements OnInit {

  public id: number;

  private workout: Workout;
  private sets: Set[] = MockSets;

  constructor(private activated_route: ActivatedRoute) {
    this.id = this.activated_route.snapshot.params.id;
    
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

  ngOnInit() {
  }

}
