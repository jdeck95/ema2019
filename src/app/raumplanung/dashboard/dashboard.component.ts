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
    private storage: Storage,
    private loadingController: LoadingController,
    private roomService: RoomService,
  ) { }

  myRooms: [];
  rooms: [];
  noRooms: Boolean;

  room = new Room('', '', '', '');

  async ngOnInit() {
    console.log(this.deviceId);
    await this.getRooms();
  }

  async getRooms() {
    const loading = await this.loadingController.create({
        spinner: 'bubbles',
    });
    loading.present();

    const url = `https://digiboard.htwk-leipzig.de/raumplanung/getrooms.php?did=${this.deviceId}`;
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(myJson => {
      this.myRooms = myJson.myrooms;
      this.rooms = myJson.rooms;
      console.log(this.myRooms, this.rooms);
      if (this.myRooms.length < 1 && this.rooms.length < 1) {
        this.noRooms = true;
        console.log(this.noRooms);
      }
      loading.dismiss();
    });
  }

  createRoom() {
    console.log('Create Room');
    this.roomService.createRoom(this.room, this.deviceId).subscribe(res => {
      console.log(res);
      this.room = res;
      console.log(this.room);
      this.noRooms = false;
    })
  }

}
