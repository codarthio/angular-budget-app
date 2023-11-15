import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BudgetMainComponent } from '@components/budget-main/budget-main.component';
import { HeaderComponent } from '@components/header/header.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    BudgetMainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EveryoneHasABudget';
  currentDate!: Date;

  ngOnInit(): void {
    this.currentDate = new Date(Date.now());
  }

  updateCurrentMonth(monthNum: number) {
    this.currentDate.setMonth(monthNum);
  }
}
