import { Exercise } from '../exercise';

export const MockExercises: Exercise[] = [
  {
    id: 1,
    origin_id: 1,
    workout_id: 1,
    name: 'Jog',
    exercise_type: 'Cardio',
    description: 'Five mile jog in 30 minutes',
    notes: 'North Boulder loop',
    created_by: 1,
    create_time: new Date(),
    complete_time: new Date(),
    sets: []
  },
  {
    id: 2,
    origin_id: 2,
    workout_id: 1,
    name: 'Sprints',
    exercise_type: 'Mobility',
    description: 'Eight 100 meter sprints',
    notes: 'Ladder sprints',
    created_by: 1,
    create_time: new Date(),
    complete_time: new Date(),
    sets: []
  } 
]