import { Set } from '../../set';
export class CompletedSetRequest {
  completed_reps: number;
  completed_value: number;
  
  constructor(set: Set) { 
    set.completed_reps ? this.completed_reps = set.completed_reps : this.completed_reps = 0;
    set.completed_value ? this.completed_value = set.completed_value: this.completed_value = 0;
  }
}