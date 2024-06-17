import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScheduleInterface } from './schedule.interface';
import { WeekItemInterface } from '../week/week.interface';
import { ITEMS } from '../../shared/consts';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {
  public scheduleList: WeekItemInterface<ScheduleInterface> = ITEMS.map(({date, day, schedule}) => ({
    date: new Date(),
    payLoad: schedule
  }));
}
