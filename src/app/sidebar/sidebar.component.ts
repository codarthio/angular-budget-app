import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsDropdownComponent } from './settings-dropdown/settings-dropdown.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [CommonModule, SettingsDropdownComponent],
})
export class SidebarComponent {}
