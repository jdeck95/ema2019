import { Component, OnInit, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../models/user';
import { UserService} from '../services/user.service';
@Component({
  selector: 'app-raumplanung',
  templateUrl: './raumplanung.page.html',
  styleUrls: ['./raumplanung.page.scss'],
})

export class RaumplanungPage implements OnInit {

  dashboard: Boolean;
  deviceId: String;
  showRooms: boolean;

  constructor(
    private userService: UserService,
    private storage: Storage
  ) { }

  ngOnInit() {

    this.showRooms = false;
    this.storage.get('deviceId').then((res) => {
      this.deviceId = res;
      if (res) {
        this.dashboard = true;
      } else {
        this.dashboard = false;
      }
    });
  }

  user = new User('', '', '', '');

  url = 'https://digiboard.htwk-leipzig.de/raumplanung/register.php?email=joerg.bleymehl@htwk-leipzig.de&name=Bleymehl&vorname=Joerg';

  onSubmit() {     
    this.userService.registerUser(this.user).subscribe(res => {
      this.user.deviceid = res.deviceid;
      this.dashboard = true;
      this.storage.set('deviceId', this.user.deviceid);
    })
  }

  toggleShowRooms() {
    this.showRooms = !this.showRooms;
    this.dashboard = !this.dashboard;
  }

}
