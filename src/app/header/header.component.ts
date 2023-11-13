import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCalendarComponent } from './header-calendar/header-calendar.component';
import { HeaderTotalsComponent } from './header-totals/header-totals.component';
import { HeaderDaysComponent } from './header-days/header-days.component';

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
export class HeaderComponent {}
