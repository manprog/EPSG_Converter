import { TestBed } from '@angular/core/testing';

import { CoordinateConverterService } from './coordinate-converter.service';

describe('CoordinateConverterService', () => {
  let service: CoordinateConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
