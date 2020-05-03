import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { ConfigService, Config } from './config.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { NewExerciseRequest } from '../models/api/exercises/newexerciserequest';
import { CompletedExerciseRequest } from '../models/api/exercises/completedexerciserequest';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})

export class ExercisesService {
  public config: Config;
  private baseURL = `${environment.apiUrl}`;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers, withCredentials: true };

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getExercise(id: number): Observable<Exercise> {
    const exerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Exercise>(this.baseURL + config.exercisesUrl + id + '/', this.options)));

    return exerciseObservable;
  }

  public deleteExercise(id: number): Observable<any> {
    const exerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.delete<any>(this.baseURL + config.exercisesUrl + id + '/', this.options)));

    return exerciseObservable;
  }

  public updateNewExercise(exercise: Exercise): Observable<Exercise> {
    
    const newExerciseRequest = new NewExerciseRequest(exercise);
    const newExerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<Exercise>(this.baseURL + config.exercisesUrl + exercise.id + '/',
                                                       JSON.stringify(newExerciseRequest), this.options)));

    return newExerciseObservable;
  }

  public completeExercise(exercise: Exercise): Observable<Exercise> {
    const completedExerciseRequest = new CompletedExerciseRequest(exercise);
    const completedExerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<Exercise>(this.baseURL + config.exercisesCompletedUrl + exercise.id + '/',
                                                              JSON.stringify(completedExerciseRequest), this.options)));
    
    return completedExerciseObservable;
  }

  public updateCompletedExercise(exercise: Exercise): Observable<Exercise> {

    const completedExerciseRequest = new CompletedExerciseRequest(exercise);
    const completedExerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<Exercise>(this.baseURL + config.exercisesCompletedUrl + exercise.id  + '/',
                                                             JSON.stringify(completedExerciseRequest), this.options)));

    return completedExerciseObservable;
  }

  public createExercise(exercise: Exercise): Observable<Exercise> {

    const newExerciseRequest = new NewExerciseRequest(exercise);
    const newExerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<Exercise>(this.baseURL + config.exercisesNewUrl,
                                                      JSON.stringify(newExerciseRequest), this.options)));

    return newExerciseObservable;
  }

  public findByOriginId(origin_id: number): Observable<Array<Exercise>> {
    const exercisesListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Exercise>>(this.baseURL + config.exercisesFindByOriginIdUrl + origin_id + '/', this.options)));

    return exercisesListObservable;
  }

  public findByWorkoutId(workout_id: number): Observable<Array<Exercise>> {
    const exercisesListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Exercise>>(this.baseURL + config.exercisesFindByWorkoutIdUrl + workout_id + '/', this.options)));

    return exercisesListObservable;
  }
}
