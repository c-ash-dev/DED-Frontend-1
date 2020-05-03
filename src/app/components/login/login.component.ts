import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredentials } from 'src/app/models/usercredentials';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IgxDialogComponent } from 'igniteui-angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  @ViewChild("alert", { read: IgxDialogComponent, static: true })
  public alert: IgxDialogComponent;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {

    // If we're already logged in redirect to homepage
    if(localStorage.getItem("logged-in") == "true"){
      this.router.navigate(["/home"]);
    }
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      result => {
        localStorage.setItem("logged-in", result.id);
        this.router.navigate(['/home']);
      },
      error => {
        this.alert.open();
      }
    )
  }
}
