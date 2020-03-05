import { User } from './user';
import { Exercise } from './exercise';

export class Routine {
  name: string;
  createdBy: User;
  exercises: Array<Exercise>;
  created: Date;
  description: string;
}
