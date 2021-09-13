import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencasPageComponent } from './doencas-page.component';

describe('DoencasPageComponent', () => {
  let component: DoencasPageComponent;
  let fixture: ComponentFixture<DoencasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoencasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoencasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
