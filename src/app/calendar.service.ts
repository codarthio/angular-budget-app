import { Injectable } from '@angular/core';
import { CalendarDates } from './calendar-date';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private currDate: Date = new Date(Date.now());
  constructor() {}

  setCurrentDate(currentDate: Date): void {
    this.currDate = currentDate;
  }

  getCurrentDate(): Date {
    return this.currDate;
  }

  getDateNext(): Date {
    let dateNext = new Date(this.currDate);
    dateNext.setMonth(this.currDate.getMonth() + 1);
    dateNext.setDate(1);
    return dateNext;
  }

  getDatePrev(): Date {
    let datePrev = new Date(this.currDate);
    datePrev.setDate(0);
    return datePrev;
  }
}
