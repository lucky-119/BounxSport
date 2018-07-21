import { TestBed, inject } from '@angular/core/testing';
import { CoachregService } from './coachreg.service';

describe('CoachregService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoachregService]
    });
  });

  it('should be created', inject([CoachregService], (service: CoachregService) => {
    expect(service).toBeTruthy();
  }));
});
