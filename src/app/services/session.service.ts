import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptionsArgs } from '@angular/http';

import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  headers: Headers;
  AUTH_SERVER = "http://localhost:3000";
  authSubject  =  new  BehaviorSubject(false);

  constructor(private http: HttpClient) { 
  }

  sendRegister(register: any) {
    console.log(register);
    console.log(`${this.AUTH_SERVER}/logSession`);

    const options: RequestOptionsArgs = { headers: this.headers };

    /*this.http.post(`${this.AUTH_SERVER}/logSession`, JSON.stringify({userInfo: register})).subscribe(data => {
          console.log(data);
        },

    error => {
        console.log('Log the error here: ', error);
    });*/

      

    return;
  }
}