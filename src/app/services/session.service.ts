import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptionsArgs, Http } from '@angular/http';

import { tap } from  'rxjs/operators';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private http: Http) { 
  }

  sendRegister(register: any) {
    return this.http.post('/log', register)
                 .toPromise()
                 .then(response => response.json())
                 .catch();
  }
}