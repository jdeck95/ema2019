import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService} from '../services/user.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-raumplanung',
  templateUrl: './raumplanung.page.html',
  styleUrls: ['./raumplanung.page.scss'],
})
export class RaumplanungPage implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  user = new User('', '', '', '');

  url = 'https://digiboard.htwk-leipzig.de/raumplanung/register.php?email=joerg.bleymehl@htwk-leipzig.de&name=Bleymehl&vorname=Joerg';

  onSubmit() {     
    this.userService.registerUser(this.user).subscribe(res => {
      console.log(res);
      this.user.deviceid = res.deviceid;
      console.log(this.user);
    })
  }

}
