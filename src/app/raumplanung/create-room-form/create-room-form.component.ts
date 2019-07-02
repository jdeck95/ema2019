import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Storage } from '@ionic/storage';
import {LoadingController} from '@ionic/angular';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-create-room-form',
  templateUrl: './create-room-form.component.html',
  styleUrls: ['./create-room-form.component.scss'],
})
export class CreateRoomFormComponent implements OnInit {

  @Input('deviceId') deviceId: String;
  @Output() roomCreated = new EventEmitter();

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
      if (this.myRooms.length < 1 && this.rooms.length < 1) {
        this.noRooms = true;
      }
      loading.dismiss();
    });
  }

  createRoom() {
    this.roomService.createRoom(this.room, this.deviceId).subscribe(res => {
      this.room = res;
      this.noRooms = false;
      this.roomCreated.next();
    })
  }

}
