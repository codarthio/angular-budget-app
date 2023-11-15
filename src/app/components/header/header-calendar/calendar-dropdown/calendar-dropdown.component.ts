import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-calendar-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './calendar-dropdown.component.html',
  styleUrl: './calendar-dropdown.component.css',
})
export class CalendarDropdownComponent {
  @Input() currentDate!: Date;

  dtf = new Intl.DateTimeFormat('en-us', { month: 'long', year: 'numeric' });
  getFormattedMonth(date: Date): string {
    return this.dtf.format(date);
  }
}
