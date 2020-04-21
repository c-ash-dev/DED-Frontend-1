import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorkoutComponent } from './selectworkout.component';

describe('SelectWorkoutComponent', () => {
  let component: SelectWorkoutComponent;
  let fixture: ComponentFixture<SelectWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
