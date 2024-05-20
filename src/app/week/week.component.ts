import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TIMETABLE_ITEMS, WEATHER_ITEMS } from '../../shared/consts';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})
export class WeekComponent {
  content: string | undefined;

  items: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = WEATHER_ITEMS;
  }
}
