import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTotalsComponent } from './header-totals.component';

describe('HeaderTotalsComponent', () => {
  let component: HeaderTotalsComponent;
  let fixture: ComponentFixture<HeaderTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTotalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
