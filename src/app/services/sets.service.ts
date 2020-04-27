import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService, Config } from './config.service';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewSetRequest } from '../models/api/sets/newsetrequest';
@Injectable({
  providedIn: 'root'
})
export class SetsService {
  public config: Config;
  private baseURL = `${environment.apiUrl}`;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public createSet(newSet: NewSetRequest): Observable<NewSet> {

  }
}
