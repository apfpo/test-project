import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DayInterface} from "./day.interface";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DayComponent {
  @Input() day!: DayInterface;
  constructor() {
  }
  @Output() prevDay = new EventEmitter<void>();
  @Output() nextDay = new EventEmitter<void>();

  onPrev() {
    this.prevDay.emit();
    console.log('prevFromDay');
  }

  onNext() {
    this.nextDay.emit();
    console.log('nextFromDay');
  }
}
