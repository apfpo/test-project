import { ITEM } from "../../shared/consts";
import { Show } from "../interfaces";

export class WeatherShow implements Show {
    show(data: ITEM): string {
      return `
        <div>
          <h3>${data.day} - ${data.date}</h3>
          <p>Temperature: ${data.weather.temperature}</p>
          <p>Type: ${data.weather.type}</p>
          <p>Air: ${data.weather.air}</p>
        </div>
      `;
    }
}