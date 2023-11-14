import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeatherComponent } from './weather/weather.component';
import { WeekDaysComponent } from './week-days/week-days.component';




@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    WeatherComponent,
    WeekDaysComponent,
  
    
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
