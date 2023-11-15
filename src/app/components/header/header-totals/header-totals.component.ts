import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-totals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-totals.component.html',
  styleUrl: './header-totals.component.css',
})
export class HeaderTotalsComponent {
  @Input() currentDate!: Date;
}
