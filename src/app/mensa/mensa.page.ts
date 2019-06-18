import { Component, OnInit } from '@angular/core';
import {MenuEntity, Menus} from '../models/menus';
import {LoadingController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

import {MensaService} from '../services/mensa.service';
import {compareDate} from '../utils/compareDate';

@Component({
  selector: 'app-mensa',
  templateUrl: './mensa.page.html',
  styleUrls: ['./mensa.page.scss'],
})
export class MensaPage implements OnInit {

    menus: Menus;
    menuEntities: MenuEntity[];
    todaysMeal: any[] = [];
    myDate = new Date();
    openPanel: Number;

    ngOnInit(): void {
        this.menus = null;
        this.openPanel = -1;
        this.loadFood();
    }

    constructor(
        private http: HttpClient,
        private loadingController: LoadingController,
        private mensaService: MensaService,
    ) {
    }

    private async loadFood() {
        const meals = this.mensaService.getMeals();
        const loading = await this.loadingController.create({
            spinner: 'bubbles',
        });

        loading.present();
        meals.subscribe(res => {
            this.menuEntities = res.Eintrag;
            this.todaysMeal = this.getTodaysMeal();
            console.log(this.todaysMeal);
            loading.dismiss();
        }, async (err) => {
            this.menuEntities = [];
            loading.dismiss();
        });
    }

    private getNextDayMeals() {
        this.myDate.setDate(this.myDate.getDate() + 1);
        this.todaysMeal = this.getTodaysMeal();
    }

    private getPreviosDayMeals() {
        this.myDate.setDate(this.myDate.getDate() - 1);
        this.todaysMeal = this.getTodaysMeal();
    }

    private getTodaysMeal() {
      return this.menuEntities.filter(entry => {
        entry.Essen = entry.Essen.split('~').join(' ');
        return compareDate(entry.Datum, this.myDate);
      });
    }

    private toggleIngredients(i) {
      (this.openPanel === i) ? this.openPanel = -1 : this.openPanel = i;
    }

}
