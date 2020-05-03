import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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
    private setService: SetsService,
    private router: Router
  ){
    this.id = this.activated_route.snapshot.params.id;

    this.startNewWorkout(this.id);
  }


  startNewWorkout(originWorkoutId: number) {
    this.workoutService.getWorkout(originWorkoutId).subscribe((respOriginWorkout: Workout) => {

      let originWorkout = new Workout(respOriginWorkout);

      let newWorkout = new Workout(originWorkout);
      newWorkout.origin_id = originWorkout.id;

      this.workoutService.createWorkout(newWorkout).subscribe((respNewWorkout: Workout) => {
        this.workout = new Workout(respNewWorkout);

        this.exerciseService.findByWorkoutId(originWorkout.id).subscribe((respExercises: Exercise[]) => {
          respExercises.forEach(respExercise => {
            let originExercise = new Exercise(respExercise);

            let newExercise = new Exercise(originExercise);
            newExercise.origin_id = newExercise.id;
            newExercise.workout_id = this.workout.id;

            console.log(newExercise);

            this.exerciseService.createExercise(newExercise).subscribe((respNewExercise: Exercise) => {
              newExercise = new Exercise(respNewExercise);
              this.workout.exercises.push(newExercise);

              this.setService.findByExerciseId(originExercise.id).subscribe((respSets: Set[]) => {
                respSets.forEach(respSet => {
                  let newSet = new Set(respSet);
                  newSet.origin_id = newSet.id;
                  newSet.exercise_id = newExercise.id;

                  this.setService.createSet(newSet).subscribe((respNewSet: Set) => {
                    newSet = new Set(respNewSet);
                    newExercise.sets.push(newSet);
                  });
                });
              });
            });
          })
        });
      });
    });
  }

  completeExercise(exercise: Exercise) {

    exercise.origin_id = -1;

    this.exerciseService.completeExercise(exercise).subscribe((response: Exercise) => {
      exercise.complete_time = new Date();

      exercise.sets.forEach(set => {
        set.exercise_id = exercise.id;
        this.setService.completeSet(set).subscribe((response: Set) => {
          set.created_or_completed = new Date();
        });
      });
    });
  }

  completeWorkout() {
    this.workoutService.completeWorkout(this.workout).subscribe(() => {
      this.router.navigate(['/track/view/' + this.workout.id]);
    });
  }

  discardWorkout() {
    this.workoutService.deleteWorkout(this.workout.id).subscribe(() => {
      this.router.navigate(['/start']);
    });
  }

  ngOnInit() {}
}
