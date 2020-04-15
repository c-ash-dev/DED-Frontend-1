import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IgxDialogComponent } from 'igniteui-angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
      private authService: AuthenticationService,
      private router: Router
  ) { }

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

        // Success alert
        this.alert.title = "Success"
        this.alert.message = "Your account was successfully created!"
        this.alert.open();
        
        this.clearForm();

        this.alert.onLeftButtonSelect.subscribe(() => {
          
          // Navigate back to login page
          this.router.navigate(['/']);
        })
      },
      error => {

        // Error alert - right now just passes error directly from backup
        // TODO: Tidy up the alert?
        this.alert.title = "Oops!"
        this.alert.message = "There was an issue creating your account: " + error.error;
        this.alert.open();
      }
    );
  }

  clearForm() {
    this.username = "";
    this.name = "";
    this.email = "";
    this.password = "";
  }
}
