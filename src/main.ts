import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { App2Component } from './app2/app2.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
//bootstrapApplication(App2Component).catch(err => console.error(err));
