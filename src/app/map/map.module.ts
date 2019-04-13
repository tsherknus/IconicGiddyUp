import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapPage } from './map.page';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapPage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
      libraries: ["places", "geometry"]
    }),
    AgmDirectionModule
  ],
  declarations: [MapPage],
  exports: [
    MapPage
  ]
})
export class MapPageModule {}
