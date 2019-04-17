/// <reference types="@types/googlemaps" />

import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { } from 'googlemaps';
import {FormControl} from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {Observable} from 'rxjs';
import {MapService} from './map.service';

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

  directions: any;
  totalDistance: any;
  rideDuration: any;

  constructor(
      private mapService: MapService,
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
        types: []
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
    this.getLocation();
  });

  let theLoop: (i: number) => void = (i: number) => {
    setTimeout(() => {
      this.getLocation();
      if (--i) {
        theLoop(i);
      }
    }, 10000);
  };

    theLoop(900);
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      console.log(resp.coords.latitude);
      this.lng = resp.coords.longitude;
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  // "https://maps.googleapis.com/maps/api/directions/json?origin=" + this.lat + "," + this.lng + "&destination=" + this.latitude + "," + this.latitude + "key=AIzaSyBHmC7WbuSh95dO3BzYMuA5ULvea1AgQB8"

  distance(lat1, lon1, lat2, lon2) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat2 - lat1) * p)/2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p))/2;

    return 7917 * Math.asin(Math.sqrt(a)); // 2 * R; R = 3958.7 km
  }

  getDirection() {
    this.markersOff = false;
    this.origin = { lat: this.lat, lng: this.lng };
    this.destination = { lat: this.latitude, lng: this.longitude };

    console.log(this.distance(this.origin.lat, this.origin.lng, this.destination.lat, this.destination.lng));

    this.mapService.getDirections(this.lat, this.lng, this.latitude, this.longitude).subscribe(
        directions => { this.directions = directions;
          this.totalDistance = directions.routes[0].legs[0].distance;
          this.rideDuration = directions.routes[0].legs[0].duration;
          this.directions = directions.routes[0].legs[0].steps
        }
    );
  }
}
