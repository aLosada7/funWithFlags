import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  @Input() countries;

  @Output() goQuiz;

  time: number = 20;
  interval;

  constructor() { 
    this.goQuiz = new EventEmitter<string>();
  }

  ngOnInit(): void {
    let time = true;
    this.interval = setInterval(() => {
      if(this.time >= 0) {
        this.time--;
      }else{
        if(time == true) {
          this.goQuiz.emit({tiempoCountries: 20});
          time = false;
        }
      }
    },1000)
  }

  next() {
    console.log("Time seeing countries: " + this.time);
    this.goQuiz.emit({tiempoCountries: (20 - this.time)});
  }

}
