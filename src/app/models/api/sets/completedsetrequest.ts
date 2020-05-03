import { Set } from '../../set';
export class CompletedSetRequest {
  completed_reps: number;
  completed_value: number;
  
  constructor(set: Set) { 
    this.completed_reps = set.reps;
    this.completed_value = set.value;
  }
}