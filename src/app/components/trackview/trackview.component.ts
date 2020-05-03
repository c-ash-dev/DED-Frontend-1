import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MockWorkouts } from 'src/app/models/mock/mock_workouts';
import { Workout } from 'src/app/models/workout';
import { WorkoutsService } from 'src/app/services/workouts.service';

import { MockExercises } from 'src/app/models/mock/mock_exercises';
import { Exercise } from 'src/app/models/exercise';
import { ExercisesService } from 'src/app/services/exercises.service';

import { MockSets } from 'src/app/models/mock/mock_sets';
import { Set } from 'src/app/models/set';
import { SetsService } from 'src/app/services/sets.service';

@Component({
  selector: 'app-trackview',
  templateUrl: './trackview.component.html',
  styleUrls: ['./trackview.component.scss']
})
export class TrackviewComponent implements OnInit {

  public id: number;

  public workout: Workout;
  public sets: Set[] = MockSets;

  constructor(
    private activated_route: ActivatedRoute,
    private workoutService: WorkoutsService,
    private exerciseService: ExercisesService,
    private setService: SetsService
  ) {
    this.id = this.activated_route.snapshot.params.id;
    
    this.workoutService.getWorkout(this.id).subscribe((response: Workout) => {
      this.workout = new Workout(response);

      this.exerciseService.findByWorkoutId(this.id).subscribe((response: Exercise[]) => {
        response.forEach(exercise => {
          let newExercise = new Exercise(exercise);
          this.workout.exercises.push(newExercise);

          this.setService.findByExerciseId(newExercise.id).subscribe((response: Set[]) => {
            response.forEach(set => {
              let newSet = new Set(set);
              newExercise.sets.push(newSet);
            });
          });
        });
      });
    });
    

    // TODO: Replace this with proper API call
    // MockWorkouts.forEach(workout => {
    //   if(workout.id == this.id) {
    //     this.workout = workout;
    //     this.workout.exercises = [];

    //     // TODO: Replace this with proper API call
    //     MockExercises.forEach(exercise => {
    //       if(exercise.workout_id == this.id) {
    //         this.workout.exercises.push(exercise);
    //         exercise.sets = [];

    //         // TODO: Replace this with a proper API call
    //         MockSets.forEach(set => {
    //           if(set.exercise_id == exercise.id) {
    //             exercise.sets.push(set);
    //           }
    //         })
    //       }
    //     });

    //     return;
    //   }
    // });

    
    

  }

  ngOnInit() {
  }

}
