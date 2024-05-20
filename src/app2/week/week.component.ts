import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DayComponent } from '../day/day.component';

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [CommonModule, DayComponent],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})
export class WeekComponent {


}
