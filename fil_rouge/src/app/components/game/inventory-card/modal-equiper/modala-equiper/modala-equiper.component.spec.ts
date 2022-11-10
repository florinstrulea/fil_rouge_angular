import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalaEquiperComponent } from './modala-equiper.component';

describe('ModalaEquiperComponent', () => {
  let component: ModalaEquiperComponent;
  let fixture: ComponentFixture<ModalaEquiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalaEquiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalaEquiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
