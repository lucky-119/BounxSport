import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachregComponent } from './coachreg.component';

describe('CoachregComponent', () => {
  let component: CoachregComponent;
  let fixture: ComponentFixture<CoachregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
