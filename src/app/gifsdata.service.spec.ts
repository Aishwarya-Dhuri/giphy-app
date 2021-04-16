import { TestBed } from '@angular/core/testing';

import { GifsdataService } from './gifsdata.service';

describe('GifsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifsdataService = TestBed.get(GifsdataService);
    expect(service).toBeTruthy();
  });
});
