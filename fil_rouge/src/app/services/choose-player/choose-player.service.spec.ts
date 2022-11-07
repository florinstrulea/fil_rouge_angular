import { TestBed } from '@angular/core/testing';

import { ChoosePlayerService } from './choose-player.service';

describe('ChoosePlayerService', () => {
  let service: ChoosePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoosePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
