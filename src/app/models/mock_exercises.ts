import { Exercise } from './exercise';

export const MockExercises: Exercise[] = [
  {
    id: 234,
    origin_id: 1,
    workout_id: 11,
    name: 'Jog',
    exercise_type: 'Cardio',
    description: 'Five mile jog in 30 minutes',
    notes: 'North Boulder loop',
    sets: [],
    created_by: null,
    created_time: new Date(),
    completed_by: null,
    completed_time: null
  },

  {
    id: 322,
    origin_id: 1,
    workout_id: 11,
    name: 'Sprints',
    exercise_type: 'Cardio',
    description: 'Eight 100 meter sprints',
    notes: 'Ladder sprints',
    sets: [],
    created_by: null,
    created_time: new Date(),
    completed_by: null,
    completed_time: null
  },
]

