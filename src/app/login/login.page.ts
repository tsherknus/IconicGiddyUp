import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  error: boolean;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {

  }

  driverLogin(email: any, password: any) {
    this.driverLoginRequest(email).subscribe(data => {
      console.log(data.data[0].password);
      if(password == data.data[0].password) {
        this.router.navigateByUrl('/map');
      } else {
        this.error = true;
      }
    })
  }



  driverLoginRequest(email:any):Observable<any> {
    return this.http.get("http://127.0.0.1:5000/login/driver/"+email);
  }
}
