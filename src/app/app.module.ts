import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { NavComponent } from './nav/nav.component';
import { SCHEDULE_SHOW, WEATHER_SHOW } from './tokens';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    WeekComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: WEATHER_SHOW, useValue: 'WeatherShow' },
    { provide: SCHEDULE_SHOW, useValue: 'ScheduleShow' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
