import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'raumplanung', loadChildren: './raumplanung/raumplanung.module#RaumplanungPageModule' },  { path: 'mensa', loadChildren: './mensa/mensa.module#MensaPageModule' },
  { path: 'mobileguide', loadChildren: './mobileguide/mobileguide.module#MobileguidePageModule' },
  { path: 'modal', loadChildren: './mobileguide/modal/modal.module#ModalPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
