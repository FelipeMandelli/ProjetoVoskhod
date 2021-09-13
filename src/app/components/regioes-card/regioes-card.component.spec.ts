import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegioesCardComponent } from './regioes-card.component';

describe('RegioesCardComponent', () => {
  let component: RegioesCardComponent;
  let fixture: ComponentFixture<RegioesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegioesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegioesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
