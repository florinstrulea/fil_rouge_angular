import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMainPageComponent } from './modal-main-page.component';

describe('ModalMainPageComponent', () => {
  let component: ModalMainPageComponent;
  let fixture: ComponentFixture<ModalMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
