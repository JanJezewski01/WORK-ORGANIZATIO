import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  config: { date: string; Day: string[]; 
    Monday: number[]; Tuesday: number[]; Wednesday: number[]; Thursday: number[]; Friday: number[]; Saturday: number[]; SunDay: number[];};
  
  constructor() {
    this.config = {
      date: new Date().toDateString(),
      Day: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
     // WeekDays: [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
      
      Monday: [2,9,16,23,30],
      Tuesday: [3,10,17,24,31],
      Wednesday: [4,11,18,25],
      Thursday: [5,12,19,26],
      Friday: [6,13,20,27],
      Saturday: [7,14,21,28],
      SunDay: [1,8,15,22,29]
    };
    
  }
}
