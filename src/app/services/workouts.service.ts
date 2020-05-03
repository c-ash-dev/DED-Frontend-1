import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { ConfigService, Config } from './config.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { NewWorkoutRequest } from '../models/api/workouts/newworkoutrequest';
import { CompletedWorkoutRequest } from '../models/api/workouts/completedworkoutrequest';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutsService {
  public config: Config;
  private baseURL = `${environment.apiUrl}`;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers, withCredentials: true };

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getWorkout(id: number): Observable<Workout> {
    const workoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Workout>(this.baseURL + config.workoutsUrl + id + '/', this.options)));

    return workoutObservable;
  }

  public deleteWorkout(id: number): Observable<any> {
    const workoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.delete<any>(this.baseURL + config.workoutsUrl + id + '/', this.options)));

    return workoutObservable;
  }

  public updateNewWorkout(workout: Workout): Observable<Workout> {
    const newWorkoutRequest = new NewWorkoutRequest(workout);
    const newWorkoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<Workout>(this.baseURL + config.workoutsUrl + workout.id + '/',
                                                       JSON.stringify(newWorkoutRequest), this.options)));

    return newWorkoutObservable;
  }
  
  public completeWorkout(workout: Workout): Observable<Workout> {
    
    const completedWorkoutRequest = new CompletedWorkoutRequest(workout);
    const completedWorkoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<Workout>(this.baseURL + config.workoutsCompletedUrl + workout.id + '/',
                                                             JSON.stringify(completedWorkoutRequest), this.options)));

    return completedWorkoutObservable;
  }

  public updateCompletedWorkout(workout: Workout): Observable<Workout> {
    
    const completedWorkoutRequest = new CompletedWorkoutRequest(workout);
    const completedWorkoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<Workout>(this.baseURL + config.workoutsCompletedUrl + workout.id + '/',
                                                             JSON.stringify(completedWorkoutRequest), this.options)));

    return completedWorkoutObservable;
  }

  public createWorkout(workout: Workout): Observable<Workout> {
    
    const newWorkoutRequest = new NewWorkoutRequest(workout);
    
    const newWorkoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<Workout>(this.baseURL + config.workoutsNewUrl,
                                                      JSON.stringify(newWorkoutRequest), this.options)));

    return newWorkoutObservable;
  }

  public findByOriginId(origin_id: number): Observable<Array<Workout>> {
    const workoutsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Workout>>(this.baseURL + config.workoutsFindByOriginIdUrl + origin_id + '/', this.options)));

    return workoutsListObservable;
  }

  public findByUserId(user_id: number): Observable<Array<Workout>> {
    const workoutsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Workout>>(this.baseURL + config.workoutsFindByUserIdUrl + user_id + '/', this.options)));

    return workoutsListObservable;
  }
}
