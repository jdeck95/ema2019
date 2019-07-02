import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import {LoadingController} from '@ionic/angular';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @Input('deviceId') deviceId: String;

  showCreateRoom: boolean;
  showCalendar: boolean;

  constructor(
  ) { }

  ngOnInit() {
    this.showCreateRoom = false;
    this.showCalendar = true;
  }

  openShowCreateRoom() {
    this.showCreateRoom = true;
    this.showCalendar = false;
  }

  openShowCalendar() {
    this.showCreateRoom = false;
    this.showCalendar = true;
  }

}
