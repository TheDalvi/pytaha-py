import { TestBed } from '@angular/core/testing';

import { RolService } from './rol.service';

describe('CategoriaService', () => {
  let service: RolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
