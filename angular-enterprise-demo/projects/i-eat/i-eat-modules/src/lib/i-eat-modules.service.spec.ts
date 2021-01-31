import { TestBed } from '@angular/core/testing';

import { IEatModulesService } from './i-eat-modules.service';

describe('IEatModulesService', () => {
  let service: IEatModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IEatModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
