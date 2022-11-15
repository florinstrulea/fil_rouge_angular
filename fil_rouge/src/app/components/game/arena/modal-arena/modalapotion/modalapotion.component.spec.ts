import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalapotionComponent } from './modalapotion.component';

describe('ModalapotionComponent', () => {
  let component: ModalapotionComponent;
  let fixture: ComponentFixture<ModalapotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalapotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalapotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
