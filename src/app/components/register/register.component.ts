import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  private username: string;
  private name: string;
  private email: string;
  private password: string;

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.username, this.name, this.email, this.password).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.error(error);
      }
    );
  }
}
