import { ITEM } from "../../shared/consts";
import { Show } from "../interfaces";

export class ScheduleShow implements Show {
  show(data: ITEM): string {
    return `
      <div>
        <h3>${data.day} - ${data.date}</h3>
        <p>Todos: ${data.schedule.todos}</p>
        <p>Day Off: ${data.schedule.dayoff ? 'Yes' : 'No'}</p>
      </div>
    `;
  }
}