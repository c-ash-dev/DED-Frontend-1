import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  sets: string;
  setsNew: string;
  setsCompleted: string;
  setsFindByOriginId: string;
  setsFindByExerciseId: string;
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
