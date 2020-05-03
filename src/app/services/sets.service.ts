import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { ConfigService, Config } from './config.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { NewSetRequest } from '../models/api/sets/newsetrequest';
import { CompletedSetRequest } from '../models/api/sets/completedsetrequest';
import { Set } from '../models/set';

@Injectable({
  providedIn: 'root'
})

export class SetsService {
  public config: Config;
  private baseURL = `${environment.apiUrl}`;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers, withCredentials: true };

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getSet(id: number): Observable<Set> {
    const setObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Set>(this.baseURL + config.setsUrl + id + '/', this.options)));

    return setObservable;
  }

  public deleteSet(id: number): Observable<any> {
    const setObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.delete<any>(this.baseURL + config.setsUrl + id + '/', this.options)));

    return setObservable;
  }

  public updateNewSet(set: Set): Observable<Set> {

    const newSetRequest = new NewSetRequest(set);
    const newSetObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<Set>(this.baseURL + config.setsUrl + set.id + '/',
                                                  JSON.stringify(newSetRequest), this.options)));

    return newSetObservable;
  }

  public updateCompletedSet(set: Set): Observable<Set> {

    const completedSetRequest = new CompletedSetRequest(set);

    const completedSetObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<Set>(this.baseURL + config.setsCompletedUrl + set.id + '/',
                                                        JSON.stringify(completedSetRequest), this.options)));

    return completedSetObservable;
  }

  public createSet(set: Set): Observable<Set> {

    const newSetRequest = new NewSetRequest(set);

    const newSetObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<Set>(this.baseURL + config.setsNewUrl,
                                                 JSON.stringify(newSetRequest), this.options)));

    return newSetObservable;
  }

  public findByOriginId(origin_id: number): Observable<Array<Set>> {
    const setsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Set>>(this.baseURL + config.setsFindByOriginIdUrl + origin_id + '/', this.options)));

    return setsListObservable;
  }

  public findByExerciseId(exercise_id: number): Observable<Array<Set>> {
    const setsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<Set>>(this.baseURL + config.setsFindByExerciseIdUrl + exercise_id + '/', this.options)));

    return setsListObservable;
  }
}
