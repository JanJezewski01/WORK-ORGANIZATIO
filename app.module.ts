import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    WeatherComponent,
    
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
