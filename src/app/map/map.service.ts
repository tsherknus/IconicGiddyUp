import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MapService {
    constructor(private http: HttpClient) {

    }
    getDirections(oLat: any, oLng: any, dLat: any, dLng: any):Observable<any> {
        return this.http.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + oLat + "," + oLng + "&destination=" + dLat + "," + dLng + "&key=AIzaSyBpb9FeAHl54o7wl9N6emBbgbdUaPX_yzk");
    }
}
