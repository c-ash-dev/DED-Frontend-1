import { Workout } from '../workout'

export const MockWorkouts: Workout[] = [
  {
    id: 1,
    origin_id: 1,
    name: 'Run Routine',
    description: 'Five mile jog then sprint set',
    exercises: [],
    notes: null,
    created_time: new Date(),
    user_id: null,
    completed_time: new Date()
  },
  {
    id: 2,
    origin_id: 2,
    name: 'Bike Routine',
    description: 'Boulder Canyon Loop',
    exercises: [],
    notes: null,
    created_time: new Date(),
    user_id: null,
    completed_time: null
  },
  {
    id: 3,
    origin_id: 3,
    name: 'Swim Routine',
    description: 'Lap training',
    exercises: [],
    notes: null,
    created_time: new Date(),
    user_id: null,
    completed_time: null
  },
  {
    id: 4,
    origin_id: 4,
    name: 'Blade Routine',
    description: 'Shred the pedestrian paths',
    exercises: [],
    notes: null,
    created_time: new Date(),
    user_id: null,
    completed_time: null
  },
  {
    id: 5,
    origin_id: 1,
    name: 'Run Routine 2',
    description: 'Five mile jog then sprint set',
    exercises: [],
    notes: null,
    created_time: new Date(),
    user_id: null,
    completed_time: new Date()
  },
]
