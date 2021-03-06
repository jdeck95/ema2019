import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import {LoadingController} from '@ionic/angular';

import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';
import { CalendarViewComponent } from '../calendar-view/calendar-view.component';

@Component({
  providers:[ CalendarViewComponent ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @Input('deviceId') deviceId: String;

  showCreateRoom: boolean;
  showCalendar: boolean;

  constructor(
    private roomService: RoomService,
    private calendar: CalendarViewComponent
  ) { }

  ngOnInit() {
    this.showCreateRoom = false;
    this.showCalendar = true;
    this.getReservations();
  }

  openShowCreateRoom() {
    this.showCreateRoom = true;
    this.showCalendar = false;
  }

  openShowCalendar() {
    this.showCreateRoom = false;
    this.showCalendar = true;
  }

  getReservations() {
    this.roomService.getRooms(this.deviceId).subscribe(res => {
      const myrooms = res['myrooms'];
      myrooms.forEach(room => {
        this.roomService.getReservations(this.deviceId, room['ID']).subscribe(res => {
          console.log(room['ID']);
          console.log(res['reservations']);
          this.calendar.addEvent();
        });
      });
    })
  }

  makeReservation() {
    console.log('make reservation');
    console.log(this.deviceId);
    const date = new Date();
    const startTime = Math.floor(date.getTime() / 1000);
    const endTime = Math.floor((new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3, 0, date.getMinutes() + 4)).getTime() / 1000);
    console.log(startTime);
    this.roomService.registerForRoom(this.deviceId, startTime, endTime, '27').subscribe(res => {
      console.log(res);
    });
  }

}
