import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLeftComponent } from './image-left.component';

describe('ImageLeftComponent', () => {
  let component: ImageLeftComponent;
  let fixture: ComponentFixture<ImageLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
