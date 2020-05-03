import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { ConfigService, Config } from './config.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewWorkoutRequest } from '../models/api/workouts/newworkoutrequest';
import { NewWorkout } from '../models/api/workouts/newworkout';
import { CompletedWorkout } from '../models/api/workouts/completedworkout';
import { CompletedWorkoutRequest } from '../models/api/workouts/completedworkoutrequest';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutsService {
  public config: Config;
  private baseURL = `${environment.apiUrl}`;

  // ALEX: Play with this and JSON Stringify if we're not sending the body correctly.
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getWorkout(id: number): Observable<Workout> {
    const workoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Workout>(this.baseURL + config.workoutsUrl + id + '/')));

    return workoutObservable;
  }

  public deleteWorkout(id: number): Observable<CompletedWorkout> {
    const workoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.delete<CompletedWorkout>(this.baseURL + config.workoutsUrl + id + '/')));

    return workoutObservable;
  }

  public updateNewWorkout(id: number, newWorkoutRequest: NewWorkoutRequest): Observable<NewWorkout> {
    const newWorkoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<NewWorkout>(this.baseURL + config.workoutsUrl + id + '/',
                                                       JSON.stringify(newWorkoutRequest), this.options)));

    return newWorkoutObservable;
  }

  public updateCompletedWorkout(id: number, completedWorkoutRequest: CompletedWorkoutRequest): Observable<CompletedWorkout> {
    const completedWorkoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<CompletedWorkout>(this.baseURL + config.workoutsCompletedUrl + id + '/',
                                                             JSON.stringify(completedWorkoutRequest), this.options)));

    return completedWorkoutObservable;
  }

  public createWorkout(newWorkoutRequest: NewWorkoutRequest): Observable<Workout> {
    const newWorkoutObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<Workout>(this.baseURL + config.workoutsNewUrl,
                                                      JSON.stringify(newWorkoutRequest), this.options)));

    return newWorkoutObservable;
  }

  public findByOriginId(origin_id: number): Observable<Array<Workout>> {
    const workoutsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Workout>>(this.baseURL + config.workoutsFindByOriginIdUrl + origin_id + '/')));

    return workoutsListObservable;
  }

  public findByUserId(user_id: number): Observable<Array<Workout>> {
    const workoutsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Workout>>(this.baseURL + config.workoutsFindByUserIdUrl + user_id + '/')));

    return workoutsListObservable;
  }
}
