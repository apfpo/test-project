import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekComponent } from './week/week.component';
import {WeatherComponent} from "./weather/weather.component";
import {ScheduleComponent} from "./schedule/schedule.component";

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '**', redirectTo: 'schedule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
