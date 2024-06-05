import { Component, Inject, Injectable, Input } from '@angular/core';
import { ITEM, ITEMS } from '../../shared/consts';
import { Show } from '../interfaces';
import { SCHEDULE_SHOW, WEATHER_SHOW } from '../tokens';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})

export class WeekComponent {
  @Input() data: ITEM[] = [];
  private currentShow: Show;

  constructor(
    @Inject(WEATHER_SHOW) private weatherShow: Show,
    @Inject(SCHEDULE_SHOW) private scheduleShow: Show
  ) {
    this.currentShow = this.weatherShow;
  }

  setViewType(type: 'weather' | 'schedule') {
    this.currentShow = type === 'weather' ? this.weatherShow : this.scheduleShow;
  }

  getContent(day: ITEM): string {
    return this.currentShow.show(day);
  }
}
