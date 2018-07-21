import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubregComponent } from './clubreg.component';

describe('ClubregComponent', () => {
  let component: ClubregComponent;
  let fixture: ComponentFixture<ClubregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
