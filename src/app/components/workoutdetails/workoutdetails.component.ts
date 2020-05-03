import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Workout } from 'src/app/models/workout';
import { Exercise } from 'src/app/models/exercise';
import { Set } from 'src/app/models/set';

import { WorkoutsService } from 'src/app/services/workouts.service';
import { ExercisesService } from 'src/app/services/exercises.service';
import { SetsService } from 'src/app/services/sets.service';

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
  public setUnits: Array<any> = Set.getUnitsDropdownItems();

  public workout: Workout = new Workout(null);
  public sets: Set[] = MockSets;

  constructor(
    private activated_route: ActivatedRoute,
    private workoutService: WorkoutsService,
    private exerciseService: ExercisesService,
    private setService: SetsService
  ){
    this.id = this.activated_route.snapshot.params.id;

    workoutService.getWorkout(this.id).subscribe((response: Workout) => {
      this.workout = new Workout(response);

      exerciseService.findByWorkoutId(this.id).subscribe((response: Exercise[]) => {
        
        // Convert and push the exercises to the workout's exercise list
        response.forEach(exercise => {

          let toAdd = new Exercise(exercise);

          this.workout.exercises.push(toAdd);

          setService.findByExerciseId(exercise.id).subscribe((response: Set[]) => {
            response.forEach(set => {
              toAdd.sets.push(new Set(set));            
            });
          })
        });
      });
    });



    // // TODO: Replace this with proper API call
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
  ngOnInit() {}
}
