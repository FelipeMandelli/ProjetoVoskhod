import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasPageComponent } from './medidas-page.component';

describe('MedidasPageComponent', () => {
  let component: MedidasPageComponent;
  let fixture: ComponentFixture<MedidasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
