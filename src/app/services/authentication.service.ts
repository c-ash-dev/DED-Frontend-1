import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {

    return Observable.create(function(observable){
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          localStorage.setItem("logged-in", "true");
          observable.next(JSON.parse(xhr.responseText));
          observable.complete();
        }
        else if (this.readyState == 4) {
          observable.error(xhr.responseText);
        }
      }

      let requestJSON = {
        "username": username,
        "password": password
      }
      
      xhr.open("POST", "http://localhost:8080/login/");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
      xhr.withCredentials = true;
      xhr.send(JSON.stringify(requestJSON));

      return () => {
        xhr.abort();
      }
    });
  }
  
  logout() {
    this.http.post(`${environment.apiUrl}/logout/`, '').subscribe(() => {
      localStorage.removeItem('logged-in');
    });
  }

  isLoggedIn() {
    return localStorage.getItem('logged-in') !== null;
  }
}
