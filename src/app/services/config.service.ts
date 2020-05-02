import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  setsUrl: string;
  setsNewUrl: string;
  setsCompletedUrl: string;
  setsFindByOriginIdUrl: string;
  setsFindByExerciseIdUrl: string;

  exercisesUrl: string;
  exercisesNewUrl: string;
  exercisesCompletedUrl: string;
  exercisesFindByOriginIdUrl: string;
  exercisesFindByWorkoutIdUrl: string;

  workoutsUrl: string;
  workoutsNewUrl: string;
  workoutsCompletedUrl: string;
  workoutsFindByOriginIdUrl: string;
  workoutsFindByUserIdUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  public getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
}
