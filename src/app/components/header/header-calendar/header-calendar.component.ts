import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDropdownComponent } from './calendar-dropdown/calendar-dropdown.component';

@Component({
  selector: 'app-header-calendar',
  standalone: true,
  templateUrl: './header-calendar.component.html',
  styleUrl: './header-calendar.component.css',
  imports: [CommonModule, CalendarDropdownComponent],
})
export class HeaderCalendarComponent {
  @Input() currentDate!: Date;

  @Output() updateCurrentMonth: EventEmitter<number> = new EventEmitter();
}
