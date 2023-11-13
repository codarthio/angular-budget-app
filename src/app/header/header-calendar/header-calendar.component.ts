import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDates } from '../../calendar-date';
import { CalendarService } from '../../calendar.service';
import { CalendarDropdownComponent } from './calendar-dropdown/calendar-dropdown.component';

@Component({
  selector: 'app-header-calendar',
  standalone: true,
  templateUrl: './header-calendar.component.html',
  styleUrl: './header-calendar.component.css',
  imports: [CommonModule, CalendarDropdownComponent],
})
export class HeaderCalendarComponent {
  calendarService: CalendarService = inject(CalendarService);

  currentDate: Date = this.calendarService.getCurrentDate();
  prevDate: Date = this.calendarService.getDatePrev();
  nextDate: Date = this.calendarService.getDateNext();
  constructor() {}

  updateCurrentDate(newDate: Date): void {
    this.calendarService.setCurrentDate(newDate);
    this.setDates();
  }

  private setDates(): void {
    this.currentDate = this.calendarService.getCurrentDate();
    this.prevDate = this.calendarService.getDatePrev();
    this.nextDate = this.calendarService.getDateNext();
  }
}
