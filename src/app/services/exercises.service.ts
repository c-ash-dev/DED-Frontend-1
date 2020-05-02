import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { ConfigService, Config } from './config.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewExerciseRequest } from '../models/api/exercises/newexerciserequest';
import { NewExercise } from '../models/api/exercises/newexercise';
import { CompletedExercise } from '../models/api/exercises/completedexercise';
import { CompletedExerciseRequest } from '../models/api/exercises/completedexerciserequest';

@Injectable({
  providedIn: 'root'
})

export class ExercisesService {
  public config: Config;
  private baseURL = `${environment.apiUrl}`;

  // ALEX: Play with this and JSON Stringify if we're not sending the body correctly.
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getExercise(id: number): Observable<CompletedExercise> {
    const exerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<CompletedExercise>(this.baseURL + config.exercisesUrl + id)));

    return exerciseObservable;
  }

  public deleteExercise(id: number): Observable<CompletedExercise> {
    const exerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.delete<CompletedExercise>(this.baseURL + config.exercisesUrl + id)));

    return exerciseObservable;
  }

  public updateNewExercise(id: number, newExerciseRequest: NewExerciseRequest): Observable<NewExercise> {
    const newExerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<NewExercise>(this.baseURL + config.exercisesUrl + id,
                                                       JSON.stringify(newExerciseRequest), this.options)));

    return newExerciseObservable;
  }

  public updateCompletedExercise(id: number, completedExerciseRequest: CompletedExerciseRequest): Observable<CompletedExercise> {
    const completedExerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<CompletedExercise>(this.baseURL + config.exercisesCompletedUrl + id,
                                                             JSON.stringify(completedExerciseRequest), this.options)));

    return completedExerciseObservable;
  }

  public createExercise(newExerciseRequest: NewExerciseRequest): Observable<NewExercise> {
    const newExerciseObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<NewExercise>(this.baseURL + config.exercisesNewUrl,
                                                      JSON.stringify(newExerciseRequest), this.options)));

    return newExerciseObservable;
  }

  public findByOriginId(origin_id: number): Observable<Array<CompletedExercise>> {
    const exercisesListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<CompletedExercise>>(this.baseURL + config.exercisesFindByOriginIdUrl + origin_id)));

    return exercisesListObservable;
  }

  public findByWorkoutId(workout_id: number): Observable<Array<CompletedExercise>> {
    const exercisesListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<CompletedExercise>>(this.baseURL + config.exercisesFindByWorkoutIdUrl + workout_id)));

    return exercisesListObservable;
  }
}
