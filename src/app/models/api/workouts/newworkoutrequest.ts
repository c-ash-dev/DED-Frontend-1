export class NewWorkoutRequest {
  origin_id: number = -1;
  user_id: number;
  name: string;
  description: string;
  notes: string = "";
}