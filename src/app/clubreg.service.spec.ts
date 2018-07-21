import { TestBed, inject } from '@angular/core/testing';

import { ClubregService } from './clubreg.service';

describe('ClubregService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubregService]
    });
  });

  it('should be created', inject([ClubregService], (service: ClubregService) => {
    expect(service).toBeTruthy();
  }));
});
