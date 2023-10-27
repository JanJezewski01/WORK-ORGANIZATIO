import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  config: { date: string; Day: string[] };
  
  constructor() {
    this.config = {
      date: new Date().toDateString(),
      Day: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    };
  }
}
