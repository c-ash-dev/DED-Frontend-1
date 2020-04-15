import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IgxDialogComponent } from 'igniteui-angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  public username: string;
  public name: string;
  public email: string;
  public password: string;

  @ViewChild("alert", { read: IgxDialogComponent, static: true })
  public alert: IgxDialogComponent;

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.username, this.name, this.email, this.password).subscribe(
      result => {
        this.alert.title = "Success"
        this.alert.message = "Your account was successfully created!"
        this.alert.open();
      },
      error => {
        this.alert.title = "Oops!"
        this.alert.message = "There was an issue creating your account: " + error.error;
        this.alert.open();
      }
    );
  }
}
