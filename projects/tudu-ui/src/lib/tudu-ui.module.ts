import { NgModule } from '@angular/core';
import { TuduUiComponent } from './tudu-ui.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    TuduUiComponent,
    CalendarComponent
  ],
  imports: [
  ],
  exports: [
    TuduUiComponent
  ]
})
export class TuduUiModule { }
