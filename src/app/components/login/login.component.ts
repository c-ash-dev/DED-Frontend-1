import { Component, OnInit } from '@angular/core';
import { UserCredentials } from 'src/app/models/usercredentials';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userCredentials: UserCredentials;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.userCredentials = new UserCredentials();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.userCredentials.username, this.userCredentials.password).subscribe(data => {
      localStorage.setItem("logged-in", "true");
      this.router.navigate(["/home"]);
    })
  }
}
