/// <reference types="@types/googlemaps" />

import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { } from 'googlemaps';
import {FormControl} from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map') elementView: ElementRef;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public autocomplete: any;

  public markersOff: boolean = true;

  public origin: any;
  public destination: any;

  lat: number;
  lng: number;

  constructor(
      private geolocation: Geolocation,
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone) {
  }


  ngOnInit() {

    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      this.autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = this.autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 14;

          this.getDirection();
        });
      });

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      console.log(resp.coords.latitude);
      this.lng = resp.coords.longitude;
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  })
  }

  getDirection() {
    this.markersOff = false;
    this.origin = { lat: this.lat, lng: this.lng };
    this.destination = { lat: this.latitude, lng: this.longitude };

    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }
}
