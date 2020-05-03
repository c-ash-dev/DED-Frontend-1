import { Set } from '../../set';

export class NewSetRequest {
  exercise_id: number;
  style: string;
  goal_reps: number;
  goal_value: number;
  unit: string;
  description: string;
  origin_id: number;

  constructor(set: Set) { 
    this.exercise_id = set.exercise_id;
    this.style = set.style;
    this.goal_reps = set.goal_reps;
    this.goal_value = set.goal_value;
    this.unit = set.unit;
    
    if(set.description){
      this.description = set.description;
    }
    else {
      this.description = "";
    }
    
    this.origin_id = -1;
  }
}