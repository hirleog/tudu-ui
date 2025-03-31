import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [],
  exports: [
    CalendarComponent, // 👈 Adicione esta linha!
  ],
})
export class TuduUiModule {}
