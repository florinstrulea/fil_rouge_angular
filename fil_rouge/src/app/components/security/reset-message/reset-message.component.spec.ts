import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetMessageComponent } from './reset-message.component';

describe('ResetMessageComponent', () => {
  let component: ResetMessageComponent;
  let fixture: ComponentFixture<ResetMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
