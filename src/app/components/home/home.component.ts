import { Component, OnInit } from '@angular/core';
import { SetsService } from 'src/app/services/sets.service';
import { NewSet } from 'src/app/models/api/sets/newset';
import { NewSetRequest } from 'src/app/models/api/sets/newsetrequest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private setsService: SetsService) {
    const testSetReq = new NewSetRequest();
    testSetReq.exercise_id = 1;
    testSetReq.goal_reps = 10;
    testSetReq.goal_value = 10;
    testSetReq.description = "test description";
    testSetReq.style = "normal";
    testSetReq.unit = "lbs";

    // Create and delete a set for example
    this.setsService.createSet(testSetReq).subscribe( (createResponse: NewSet) => {
      console.log(createResponse);
      this.setsService.deleteSet(createResponse.id).subscribe( (deleteResponse) => {
        console.log(deleteResponse);
      });
    });
  }

  ngOnInit() {

  }
}

