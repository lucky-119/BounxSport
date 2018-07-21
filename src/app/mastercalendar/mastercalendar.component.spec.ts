import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercalendarComponent } from './mastercalendar.component';

describe('MastercalendarComponent', () => {
  let component: MastercalendarComponent;
  let fixture: ComponentFixture<MastercalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
