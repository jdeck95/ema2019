import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MobileguidePage } from './mobileguide.page';
import { ModalPage } from './modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: MobileguidePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [ModalPage],
  declarations: [MobileguidePage, ModalPage]
})
export class MobileguidePageModule {}
