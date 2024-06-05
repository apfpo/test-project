import { Component, ViewChild } from '@angular/core';
import { WeekComponent } from '../week/week.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @ViewChild('weekView') weekView!: WeekComponent;
  showWeather() {
    this.weekView.setViewType('weather');
  }

  showSchedule() {
    this.weekView.setViewType('schedule');
  }
}
