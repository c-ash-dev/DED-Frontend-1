import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateworkoutComponent } from './createworkout.component';

describe('CreateworkoutComponent', () => {
  let component: CreateworkoutComponent;
  let fixture: ComponentFixture<CreateworkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateworkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
