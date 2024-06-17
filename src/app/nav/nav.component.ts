import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { WeekComponent } from '../week/week.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Output() public onTabClick = new EventEmitter<string>();

  public setActiveTab(tabName: string): void {
    this.onTabClick.emit(tabName);
  }
}
