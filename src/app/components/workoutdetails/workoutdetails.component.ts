import { Component, OnInit, Input } from '@angular/core';
import { MockWorkouts } from '../../models/mock_workouts';
import { MockExercises } from '../../models/mock_exercises'
import { Workout } from 'src/app/models/workout';
import { Exercise } from 'src/app/models/exercise';
import { Set } from 'src/app/models/set';


@Component({
  selector: 'app-workoutdetails',
  templateUrl: './workoutdetails.component.html',
  styleUrls: ['./workoutdetails.component.scss']
})

export class WorkoutDetailsComponent implements OnInit {

  @Input() sets: Array<Set>;

  public workouts: Workout[] = MockWorkouts;
  public exercises: Exercise[] = MockExercises;
  public set: Set;

  // public workoutOriginId: number;

  public setUnits: Array<any>;

  constructor(){
    // this.workouts = new Workout();

    this.set = new Set();
    this.setUnits = this.set.getUnitsDropdownItems();
  }

  public receiveSelectedUnits($event: string) {
    this.set.units = $event;
  }

  // getWorkoutOriginId(workouts: Workout): void {
  //   this.workoutOriginId = this.workouts.origin_id;
  //   console.log(this.workoutOriginId)
  // }

  ngOnInit() {}
}
