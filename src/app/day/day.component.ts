import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TIMETABLE, WEATHER } from '../../shared/consts';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})

export class DayComponent {
  @Input() info: WEATHER | TIMETABLE | undefined;
  curr: any;
  constructor(private router: Router) { }

  ngOnInit() {
this.curr = this.router.url;
console.log(this.curr)
  }
}
