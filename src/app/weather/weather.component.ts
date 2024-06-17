import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WeekItemInterface} from "../week/week.interface";
import {WeatherInterface} from "./weather.interface";
import {ITEMS} from "../../shared/consts";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  public weatherList: WeekItemInterface<WeatherInterface> = ITEMS.map(({date, day, weather}) => ({
    date: new Date(),
    payLoad: weather
  }));
}
