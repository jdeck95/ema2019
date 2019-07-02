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

  constructor(
  ) { }


  async ngOnInit() {
  }

}
