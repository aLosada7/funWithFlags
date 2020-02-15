import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, catchError } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private http: HttpClient) { 
  }

  sendRegister(register: any) {
    console.log(register);
    return this.http.post('/log', register).subscribe(res => console.log(res));
  }
}