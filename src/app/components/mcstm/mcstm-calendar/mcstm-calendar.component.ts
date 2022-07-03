import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarDayItem } from 'src/app/components/mcstm/mcstm-calendar/utils/calendar-day-item';

@Component({
  selector: 'app-mcstm-calendar',
  templateUrl: './mcstm-calendar.component.html',
  styleUrls: ['./mcstm-calendar.component.css']
})
export class McstmCalendarComponent implements OnInit {

  //Выбранная дата
  @Input() 
  public selectedDate: Date = new Date( (new Date).getFullYear(), (new Date).getMonth(), (new Date).getDay() );

  //Событие изменения даты
  @Output()
  public dateChange = new EventEmitter<Date>();

  //Дгод и месяц календаря
  public pageDate: Date = new Date( (new Date).getFullYear(), (new Date).getMonth(), 1 );

  //Смещение от начала месяца
  public offset: number = 0;

  //Даты за этот месяц
  public get arDates() {

    const res: CalendarDayItem[] = [];
    return res;

  };

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
