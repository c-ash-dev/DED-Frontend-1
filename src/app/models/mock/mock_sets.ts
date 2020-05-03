import { Set } from '../set';

export const MockSets: Set[] = [
     {
          id: 1,
          origin_id: 1,
          exercise_id: 1,
          style: 'normal',
          unit: 'lbs',
          goal_reps:10,
          goal_value:10,
          completed_reps: 10,
          completed_value: 10,
          description: 'This is a mock set',
          notes: null,
          created_or_completed: new Date(),
          created_by: null
     },
     {
          id: 2,
          origin_id: 2,
          exercise_id: 1,
          style: 'normal',
          unit: 'lbs',
          goal_reps:10,
          goal_value:10,
          completed_reps: 15,
          completed_value: 10,
          description: 'This is a mock set',
          notes: null,
          created_or_completed: new Date(),
          created_by: null
     }
]