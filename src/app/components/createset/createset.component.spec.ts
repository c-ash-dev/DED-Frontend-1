import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesetComponent } from './createset.component';

describe('CreatesetComponent', () => {
  let component: CreatesetComponent;
  let fixture: ComponentFixture<CreatesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
