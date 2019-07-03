import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {

  constructor() { }

  eventSource;
  isToday: boolean;
  viewTitle;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }; 

  ngOnInit() {
    const date = new Date();
    const startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, date.getMinutes() + 2);
    const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3, 0, date.getMinutes() + 4);
    this.eventSource = [{
      title: 'Test-Event',
      startTime: startTime,
      endTime: endTime,
      allDay: false
    }]
  }

  public addEvent() {
    console.log('test');
  }

  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    // console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    // console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
    //     (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

}
