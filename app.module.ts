import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DroptownComponent } from './droptown/droptown.component';
import { GraficComponent } from './grafic/grafic.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    DroptownComponent,
    GraficComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
