import { TestBed } from '@angular/core/testing';
import { BranoService } from './brano-service';

describe('BranoService', () => {
  let service: BranoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
