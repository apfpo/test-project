import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {WeekItemInterface} from "./week.interface";
import { DayInterface } from '../day/day.interface';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeekComponent {
  @Input() public data: WeekItemInterface = [];
  currentDayIndex: number = 0;
  currentDay: DayInterface | undefined;
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.data.length > 0) {
      this.updateCurrentDay();
    }
  }

  updateCurrentDay() {
    this.currentDay = { ...this.data[this.currentDayIndex] };
    this.cdr.markForCheck(); 
  }

  showPrevDay() {
    if (this.currentDayIndex > 0) {
      this.currentDayIndex--;
      this.updateCurrentDay();
    }
  }

  showNextDay() {
    if (this.currentDayIndex < this.data.length - 1) {
      this.currentDayIndex++;
      this.updateCurrentDay();
    }
  }
}
