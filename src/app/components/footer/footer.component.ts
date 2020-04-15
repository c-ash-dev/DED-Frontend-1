import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public version: string = version;
  public showLogout: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.router.events.subscribe((ev) => {
      this.showLogout = this.authService.isLoggedIn();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
