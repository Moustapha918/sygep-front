import { TestBed, inject } from '@angular/core/testing';

import { ContratService } from './contrat.service';

describe('ContratService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContratService]
    });
  });

  it('should be created', inject([ContratService], (service: ContratService) => {
    expect(service).toBeTruthy();
  }));
});
