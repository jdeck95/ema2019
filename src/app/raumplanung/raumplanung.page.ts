import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../models/user';
import { UserService} from '../services/user.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-raumplanung',
  templateUrl: './raumplanung.page.html',
  styleUrls: ['./raumplanung.page.scss'],
})
export class RaumplanungPage implements OnInit {

  dashboard: Boolean;

  constructor(
    private userService: UserService,
    private storage: Storage
  ) { }

  ngOnInit() {

    this.storage.get('deviceId').then((res) => {
      console.log('Your deviceId is', res);
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
      console.log(res);
      this.user.deviceid = res.deviceid;
      console.log(this.user);
      this.dashboard = true;
      this.storage.set('deviceId', this.user.deviceid);
    })
  }

}
