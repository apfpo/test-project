import { RouterModule, Routes } from '@angular/router';
import { App2Component } from './app2.component';
import { DayComponent } from './day/day.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: DayComponent },
  { path: 'schedule', component: DayComponent },
  { path: '**', redirectTo: 'weather' }
];
