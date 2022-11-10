import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionCardComponent } from './potion-card.component';

describe('PotionCardComponent', () => {
  let component: PotionCardComponent;
  let fixture: ComponentFixture<PotionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
