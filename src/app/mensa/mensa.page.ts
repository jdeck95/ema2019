import { Component, OnInit } from '@angular/core';
import {MenuEntity, Menus} from '../models/menus';
import {LoadingController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

import {MensaService} from '../services/mensa.service';
import {compareDate} from '../utils/compareDate';
import {getWeekday} from '../utils/getWeekday';

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
    today = true;
    weekday = String;
    weekend: Boolean;
    openPanel: Number;

    ngOnInit(): void {
        this.menus = null;
        this.openPanel = -1;
        this.loadFood();
        this.weekday = getWeekday(this.myDate);
        this.weekend = this.isWeekend(this.myDate);
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
            loading.dismiss();
        }, async (err) => {
            this.menuEntities = [];
            loading.dismiss();
        });
    }
    
    private getTodaysMeal() {
        return this.menuEntities.filter(entry => {
            entry.Essen = entry.Essen.split('~').join(' ');
            return compareDate(entry.Datum, this.myDate);
        });
    }

    private isWeekend(date) {
        if (date.getDay() === 0 || date.getDay() === 6) {
            return true;
        } else {
            return false;
        }
    }

    private getNextDayMeals() {
        this.myDate.setDate(this.myDate.getDate() + 1);
        this.weekday = getWeekday(this.myDate);
        this.weekend = this.isWeekend(this.myDate);
        this.todaysMeal = this.getTodaysMeal();
        this.today = compareDate(new Date(), this.myDate);
    }

    private getPreviousDayMeals() {
        this.myDate.setDate(this.myDate.getDate() - 1);
        this.weekday = getWeekday(this.myDate);
        this.weekend = this.isWeekend(this.myDate);
        this.todaysMeal = this.getTodaysMeal();
        this.today = compareDate(new Date(), this.myDate);
    }

    private toggleIngredients(i) {
      (this.openPanel === i) ? this.openPanel = -1 : this.openPanel = i;
    }

    private goToToday() {
        this.myDate = new Date();
        this.weekday = getWeekday(this.myDate);
        this.weekend = this.isWeekend(this.myDate);
        this.todaysMeal = this.getTodaysMeal();
        this.today = compareDate(new Date(), this.myDate);
    }

}
