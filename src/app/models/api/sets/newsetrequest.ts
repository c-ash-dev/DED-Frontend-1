import { Set } from '../../set';

export class NewSetRequest {
  origin_id: number;
  exercise_id: number;
  style: string;
  goal_reps: number;
  goal_value: number;
  unit: string;
  description: string;
  
  constructor(set: Set) { 

    set.origin_id ? this.origin_id = set.origin_id : this.origin_id = -1;
    this.exercise_id = set.exercise_id;
    this.style = set.style;
    this.goal_reps = set.goal_reps;
    this.goal_value = set.goal_value;
    this.unit = set.unit;
    
    set.description ? this.description = set.description : this.description = "";
  }
}