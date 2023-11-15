import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCalendarComponent } from './header-calendar/header-calendar.component';
import { HeaderTotalsComponent } from './header-totals/header-totals.component';
import { HeaderDaysComponent } from './header-days/header-days.component';
import { debug } from 'console';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [
    CommonModule,
    HeaderCalendarComponent,
    HeaderTotalsComponent,
    HeaderDaysComponent,
  ],
})
export class HeaderComponent {
  @Input() currentDate!: Date;

  @Output() updateMonth: EventEmitter<number> = new EventEmitter();

  updateCurrentMonth(monthNum: number) {
    this.updateMonth.emit(monthNum);
  }
}
