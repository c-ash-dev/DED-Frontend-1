import { Component, OnInit } from '@angular/core';
import { UserCredentials } from 'src/app/models/usercredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userCredentials: UserCredentials;

  constructor() {
    this.userCredentials = new UserCredentials();
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    alert(JSON.stringify(formData));
  }
}
