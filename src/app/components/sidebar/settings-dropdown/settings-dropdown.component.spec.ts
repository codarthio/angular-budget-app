import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDropdownComponent } from './settings-dropdown.component';

describe('SettingsDropdownComponent', () => {
  let component: SettingsDropdownComponent;
  let fixture: ComponentFixture<SettingsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
