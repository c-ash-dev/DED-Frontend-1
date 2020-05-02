import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { ConfigService, Config } from './config.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewSetRequest } from '../models/api/sets/newsetrequest';
import { NewSet } from '../models/api/sets/newset';
import { CompletedSet } from '../models/api/sets/completedset';
import { CompletedSetRequest } from '../models/api/sets/completedsetrequest';

@Injectable({
  providedIn: 'root'
})

export class SetsService {
  public config: Config;
  private baseURL = `${environment.apiUrl}`;

  // ALEX: Play with this and JSON Stringify if we're not sending the body correctly.
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getSet(id: number): Observable<CompletedSet> {
    const setObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<CompletedSet>(this.baseURL + config.setsUrl + id)));

    return setObservable;
  }

  public deleteSet(id: number): Observable<CompletedSet> {
    const setObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.delete<CompletedSet>(this.baseURL + config.setsUrl + id)));

    return setObservable;
  }

  public updateNewSet(id: number, newSetRequest: NewSetRequest): Observable<NewSet> {
    const newSetObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<NewSet>(this.baseURL + config.setsUrl + id,
                                                  JSON.stringify(newSetRequest), this.options)));

    return newSetObservable;
  }

  public updateCompletedSet(id: number, completedSetRequest: CompletedSetRequest): Observable<CompletedSet> {
    const completedSetObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.patch<CompletedSet>(this.baseURL + config.setsCompletedUrl + id,
                                                        JSON.stringify(completedSetRequest), this.options)));

    return completedSetObservable;
  }

  public createSet(newSetRequest: NewSetRequest): Observable<NewSet> {
    const newSetObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.post<NewSet>(this.baseURL + config.setsNewUrl,
                                                 JSON.stringify(newSetRequest), this.options)));

    return newSetObservable;
  }

  public findByOriginId(origin_id: number): Observable<Array<CompletedSet>> {
    const setsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<CompletedSet>>(this.baseURL + config.setsFindByOriginIdUrl + origin_id)));

    return setsListObservable;
  }

  public findByExerciseId(exercise_id: number): Observable<Array<CompletedSet>> {
    const setsListObservable = this.configService.getConfig().pipe(
      switchMap(config => this.http.get<Array<CompletedSet>>(this.baseURL + config.setsFindByExerciseIdUrl + exercise_id)));

    return setsListObservable;
  }
}
