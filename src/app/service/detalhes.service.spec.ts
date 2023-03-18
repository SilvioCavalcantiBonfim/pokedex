import { TestBed } from '@angular/core/testing';

import { DetalhesService } from './detalhes.service';

describe('DetalhesService', () => {
  let service: DetalhesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
