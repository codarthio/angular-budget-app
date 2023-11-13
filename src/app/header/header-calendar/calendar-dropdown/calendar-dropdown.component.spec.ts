import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDropdownComponent } from './calendar-dropdown.component';

describe('CalendarDropdownComponent', () => {
  let component: CalendarDropdownComponent;
  let fixture: ComponentFixture<CalendarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
