import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  IgxCardComponent, 
          IgxFocusModule,
          IgxIconComponent,
          IgxDialogModule } from 'igniteui-angular'

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Router } from '@angular/router';
import { NgForm }   from '@angular/forms';
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from 'src/app/services/authentication.guard';
import { LogoComponent } from '../logo/logo.component'
import { AnimationBuilder } from '@angular/animations';
 
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent, 
        IgxCardComponent,
        NgForm,
        NgModel,
        HomeComponent,
        LogoComponent,
        IgxIconComponent
      ],
      imports: [
        RouterModule,
        IgxFocusModule,
        HttpClientModule,
        IgxDialogModule,
        RouterTestingModule.withRoutes([
          { path: '', component: LoginComponent},
          { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
        ])
      ],
      providers: [
        AnimationBuilder,
        AuthGuard
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it("should take user to home upon successful login", () => {

    const navigateSpy = spyOn(router, 'navigate');

    component.username = "acostinescu";
    component.password = "1234asdf";
    component.onSubmit();

    setTimeout(function(){
      expect(navigateSpy).toHaveBeenCalledWith(["/home"]);
    }, 500);
  });

});
