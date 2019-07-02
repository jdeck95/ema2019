import { Component, OnInit,  Input } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.component.html',
  styleUrls: ['./my-rooms.component.scss'],
})
export class MyRoomsComponent implements OnInit {

  @Input('deviceId') deviceId: String;

  constructor(
    private roomService: RoomService
  ) { }

  myRooms;

  ngOnInit() {
    this.roomService.getRooms(this.deviceId).subscribe(res => {
      this.myRooms = res['myrooms'];
    });
  }

}
