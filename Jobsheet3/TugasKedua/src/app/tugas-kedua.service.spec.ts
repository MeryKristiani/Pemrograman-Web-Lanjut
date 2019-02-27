import { TestBed } from '@angular/core/testing';

import { TugasKeduaService } from './tugas-kedua.service';

describe('TugasKeduaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TugasKeduaService = TestBed.get(TugasKeduaService);
    expect(service).toBeTruthy();
  });
});
