import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-createworkout',
  templateUrl: './createworkout.component.html',
  styleUrls: ['./createworkout.component.scss']
})
export class CreateworkoutComponent implements OnInit {
  public workout: Workout;

  constructor() {
    this.workout = new Workout();
  }

  ngOnInit() {
  }

}
