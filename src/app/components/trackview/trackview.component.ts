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
  private exercises: Exercise[] = MockExercises;
  private sets: Set[] = MockSets;

  constructor(private activated_route: ActivatedRoute) {
    this.id = this.activated_route.snapshot.params.id;
    
    // TODO: Replace this with proper DB call
    MockWorkouts.forEach(element => {
      if(this.id == element.id) {
        this.workout = element;
        return;
      }
    });

  }

  ngOnInit() {
  }

}
