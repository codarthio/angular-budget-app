import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService implements OnInit {
  private currDate!: Date;

  ngOnInit(): void {
    this.currDate = new Date(Date.now());
  }
  getCurrentDate(): Date {
    return this.currDate;
  }
  setCurrentMonth(monthNum: number): Date {
    this.currDate.setMonth(monthNum);
    return this.currDate;
  }
}
