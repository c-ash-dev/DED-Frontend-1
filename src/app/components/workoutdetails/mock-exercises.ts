import { normalize } from 'path';

export const EXERCISES = [
  {
    id: 234,
    origin_id: 1,
    workout_id: 11,
    name: 'Jog',
    exercise_type: 'Cardio',
    description: 'Five mile jog in 30 minutes',
    notes: 'North Boulder loop',
    sets: {
      type: 'Warmup',
      value: 5,
      units: 'Miles',
      reps: 1
    }
  },

  {
    id: 322,
    origin_id: 1,
    workout_id: 11,
    name: 'Sprints',
    exercise_type: 'Cardio',
    description: 'Eight 100 meter sprints',
    notes: 'Ladder sprints',
    sets: {
      type: 'Normal',
      value: 100,
      units: 'Yards',
      reps: 10
    }
  },
]

