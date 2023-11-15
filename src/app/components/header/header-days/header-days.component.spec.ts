import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDaysComponent } from './header-days.component';

describe('HeaderDaysComponent', () => {
  let component: HeaderDaysComponent;
  let fixture: ComponentFixture<HeaderDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
