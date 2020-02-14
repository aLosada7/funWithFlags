import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Output() loginResult;

  userForm = new FormGroup({
    id: new FormControl(''),
    edad: new FormControl(''),
    sexo: new FormControl(''),
  });

  constructor() {
      this.loginResult = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  sendLogin(){

    let userData = {
      "id": '',
      "edad": '',
      "sexo": ''
    };
    userData.id = this.userForm.get('id').value;
    userData.edad = this.userForm.get('edad').value;
    userData.sexo = this.userForm.get('sexo').value;
    
    console.log(userData);
    
    this.loginResult.emit({userData: userData});
  }

}
