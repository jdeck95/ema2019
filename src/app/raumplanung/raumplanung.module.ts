import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RaumplanungPage } from './raumplanung.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [RaumplanungPage, DashboardComponent, CreateRoomFormComponent]
})
export class RaumplanungPageModule {}
