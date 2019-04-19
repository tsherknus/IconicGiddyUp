import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'passenger-maps', loadChildren: './passenger-maps/passenger-maps.module#PassengerMapsPageModule' },
  { path: 'driver-maps', loadChildren: './driver-maps/driver-maps.module#DriverMapsPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
