import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-createworkout',
  templateUrl: './createworkout.component.html',
  styleUrls: ['./createworkout.component.scss']
})
export class CreateworkoutComponent implements OnInit {
  public workout: Workout;
  public creating: Boolean;

  constructor() {
    this.workout = new Workout();
    this.creating = false;
  }

  ngOnInit() {
  }

  startCreating() {
    this.creating = true;
    console.log(this.creating);
  }

}
