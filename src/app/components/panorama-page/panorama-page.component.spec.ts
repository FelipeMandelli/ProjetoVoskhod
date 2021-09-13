import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaPageComponent } from './panorama-page.component';

describe('PanoramaPageComponent', () => {
  let component: PanoramaPageComponent;
  let fixture: ComponentFixture<PanoramaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoramaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
