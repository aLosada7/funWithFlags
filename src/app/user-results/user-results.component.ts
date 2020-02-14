import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss']
})

export class UserResultsComponent implements OnInit {

  @Input() tiempoQuiz;
  @Input() respuestasAcertadas;
  @Input() respuestasFalladas;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
