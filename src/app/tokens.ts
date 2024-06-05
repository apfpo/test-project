import { InjectionToken } from "@angular/core";
import { Show } from "./interfaces";

export const WEATHER_SHOW = new InjectionToken<Show>('WeatherShow');
export const SCHEDULE_SHOW = new InjectionToken<Show>('ScheduleShow');