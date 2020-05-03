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
          reps: 10,
          value: 10,
          description: 'This is a mock set',
          notes: null,
          created_time: new Date(),
          completed_time: new Date(),
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
          reps: 15,
          value: 10,
          description: 'This is a mock set',
          notes: null,
          created_time: new Date(),
          completed_time: new Date(),
          created_by: null
     }
]