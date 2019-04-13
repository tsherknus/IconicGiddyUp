import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader} from "@agm/core";
import { AgmDirectionModule } from 'agm-direction';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent
  ],
  entryComponents: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
        libraries: ["places", "geometry"]
      }),
      AgmDirectionModule
  ],
  providers: [
    StatusBar,
    Geolocation,
    NativeGeocoder,
    SplashScreen,
    GoogleMapsAPIWrapper,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
