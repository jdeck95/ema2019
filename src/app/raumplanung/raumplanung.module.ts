import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgCalendarModule  } from 'ionic2-calendar';


import { IonicModule } from '@ionic/angular';

import { RaumplanungPage } from './raumplanung.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { MyRoomsComponent } from './my-rooms/my-rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RaumplanungPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [RaumplanungPage, DashboardComponent, CreateRoomFormComponent, CalendarViewComponent, MyRoomsComponent]
})
export class RaumplanungPageModule {}
