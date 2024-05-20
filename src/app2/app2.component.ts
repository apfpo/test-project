import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { WeekComponent } from './week/week.component';

@Component({
  standalone: true,
  selector: 'app2-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss'],
  imports: [RouterModule, NavComponent, WeekComponent]
})
export class App2Component {
  title = 'My Angular App2';
}
