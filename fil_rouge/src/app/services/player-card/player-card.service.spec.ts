import { TestBed } from '@angular/core/testing';

import { PlayerCardService } from './player-card.service';

describe('PlayerCardService', () => {
  let service: PlayerCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
