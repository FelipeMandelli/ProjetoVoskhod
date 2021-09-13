import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencasCardComponent } from './doencas-card.component';

describe('DoencasCardComponent', () => {
  let component: DoencasCardComponent;
  let fixture: ComponentFixture<DoencasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoencasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoencasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
