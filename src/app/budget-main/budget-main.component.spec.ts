import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetMainComponent } from './budget-main.component';

describe('BudgetMainComponent', () => {
  let component: BudgetMainComponent;
  let fixture: ComponentFixture<BudgetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
