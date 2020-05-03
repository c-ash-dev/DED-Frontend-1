import { Component, OnInit, Input } from '@angular/core';
import { Set } from 'src/app/models/set';
import { SetsService } from 'src/app/services/sets.service';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-createset',
  templateUrl: './createset.component.html',
  styleUrls: ['./createset.component.scss']
})
export class CreatesetComponent implements OnInit {
  // Array of sets (will eventually get passed in from Exercise)
  @Input() exercise: Exercise;

  // Current new set being created by user
  public set: Set;

  public setTypes: Array<any> = Set.getTypeDropdownItems();
  public setUnits: Array<any> = Set.getUnitsDropdownItems();

  constructor(private setService: SetsService) {
    this.set = new Set();
  }

  public receiveSelectedType($event: string) {
    this.set.style = $event;
  }

  public receiveSelectedUnits($event: string) {
    this.set.unit = $event;
  }

  public addSet() {

    this.set.exercise_id = this.exercise.id;
    this.setService.createSet(this.set).subscribe((response: Set) => {
      this.exercise.sets.push(new Set(response));
    });
  }

  public removeSet(index: number) {
    this.setService.deleteSet(this.exercise.sets[index].id).subscribe(() => {
      this.exercise.sets.splice(index, 1);
    });
  }

  ngOnInit() {
  }

}
