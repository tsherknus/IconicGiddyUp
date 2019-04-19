import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  driver: any;
  email: any;
  password: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getDrivers().subscribe(name => {
    //   console.log(name.drivers);
    //   this.driver = name.drivers;
    // })
  }

  login(email: any, password: any) {
    console.log(email, password);
  }

  // getDrivers():Observable<any> {
  //   return this.http.get("http://127.0.0.1:5000/employees");
  // }
}
