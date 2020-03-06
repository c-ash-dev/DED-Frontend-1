import { Component, OnInit } from '@angular/core';
import { Set } from 'src/app/models/set';

@Component({
  selector: 'app-createset',
  templateUrl: './createset.component.html',
  styleUrls: ['./createset.component.scss']
})
export class CreatesetComponent implements OnInit {
  public set: Set;

  constructor() {
    this.set = new Set();
  }

  ngOnInit() {
  }

}
