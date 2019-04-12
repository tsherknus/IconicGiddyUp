/// <reference types="@types/googlemaps" />

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {NativeGeocoderOptions} from '@ionic-native/native-geocoder';
import {NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder/ngx';
import { } from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  lat: number;
  lng: number;

  constructor(
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder) {
  }


  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      console.log(resp.coords.latitude);
      this.lng = resp.coords.longitude;
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
