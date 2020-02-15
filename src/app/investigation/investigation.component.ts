import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data.model';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.css']
})
export class InvestigationComponent implements OnInit {

  countries;
  questions;

  showLogin: boolean;
  showCountries: boolean;
  showQuiz: boolean;
  showResults: boolean;

  sesionInfo = {
    id: '',
    edad: '',
    sexo: '',
    ronda: '',
    tiempoCountries: '',
    tiempoQuiz: '',
    respuestasAcertadas: '',
    respuestasFalladas: ''
  }

  constructor(private sesionService: SessionService) { 
    this.showLogin = true;
  }

  ngOnInit(): void {

    this.countries =[ 
      { 
         "pais":"Montenegro",
         "foto":"montenegro.png",
         "show":false, //show hint
       "pista": "Limita por el norte con Bosnia y Herzegovina"
   
      },
      { 
         "pais":"Kosovo",
         "foto":"kosovo.png",
         "show":false,
       "pista": "País de origen de Dua Lipa"
      },
      { 
         "pais":"Isla de Navidad",
         "foto":"isladenavidad.jpg",
         "show":false,
       "pista": "Santa Claus parece pero no es"
      },
      { 
         "pais":"Swazilandia",
         "foto":"swazilandia.png",
         "show":false,
       "pista": "Frontera con Sudáfrica y Mozambique"
      },
      { 
         "pais":"Palau",
         "foto":"palau.png",
         "show":false,
       "pista": "En Barcelona hay un pabellón con un nombre similar"
      },
      { 
         "pais":"Uganda",
         "foto":"uganda.jpg",
         "show":false,
       "pista": "Los vengadores saben la respuesta"
      },
      { 
         "pais":"Sierra Leona",
         "foto":"sierraleona.png",
         "show":false,
       "pista": "El ébola le ataco duramente"
      },
      { 
         "pais":"Argelia",
         "foto":"argelia.png",
         "show":false,
       "pista": "A solo hora y media de España"
      },
      { 
         "pais":"Surinam",
         "foto":"surinam.png",
         "show":false,
       "pista": "Paramaribo es su capital"
      },
      { 
         "pais":"Letonia",
         "foto":"letonia.jpg",
         "show":false,
       "pista": "País europeo con una capital ambientada por Erasmus"
      },
      { 
         "pais":"El Cairo",
         "foto":"elcairo.png",
         "show":false,
       "pista": "Las piramides estan cerca"
      },
      { 
         "pais":"Tanzania",
         "foto":"tanzania.png",
         "show":false,
       "pista": "Encontraras mucha fauna en este país"
      }
   ];

      let resultsNumbers=[];
      let entro = false;

      let i;
      for (i  = 0; i < 9; i++){
        entro = false;
        while(!entro){
          let number = Math.floor(Math.random() * 12);
          if (resultsNumbers.indexOf(number) < 0) {
            resultsNumbers.push(number);
            entro = true;
          }
        }
      }

    console.log(resultsNumbers);

    this.questions = [];
    for (let resultsNumber of resultsNumbers) {
      this.questions.push(this.countries[resultsNumber])
    }

    for(let question of this.questions) {
      let entro; let i;
      let posiblesRespuestas = [];
      let resultsNumbers=[];
      for (i  = 0; i < 4; i++){
        while(!entro){
          let number = Math.floor(Math.random() * 12);
          if (resultsNumbers.indexOf(number) < 0) {
            posiblesRespuestas.push(number);
            break;
          }
        }
      }

      let numberResponse = this.countries.indexOf(question)
      if(posiblesRespuestas.indexOf(numberResponse) < 0) {
        posiblesRespuestas[Math.floor(Math.random() * 4)] = numberResponse;
      }

      console.log(posiblesRespuestas);

      question.respuestas = [];

      for (let posiblesRespuesta of posiblesRespuestas) {
        question.respuestas.push(this.countries[posiblesRespuesta])
      }

      console.log(question);
    }
  
  }

  loginResult(event) {
    this.showLogin = false;
    this.showCountries = true;

    console.log(event.userData.id);

    console.log(this.sesionInfo.id)
    this.sesionInfo.id = event.userData.id;
    console.log(this.sesionInfo.id)
    this.sesionInfo.edad = event.userData.edad;
    this.sesionInfo.sexo = event.userData.sexo;

    console.log(this.sesionInfo);
  }

  goQuiz() {
    this.showCountries = false;
    this.showQuiz = true;

    window.scrollTo(0, 0);
  }

  quizResult(event) {
    this.showResults = true;

    console.log(event)
    this.sesionInfo.tiempoQuiz = event.tiempoQuiz;
    this.sesionInfo.respuestasAcertadas = event.respuestasAcertadas;
    this.sesionInfo.respuestasFalladas = event.respuestasFalladas;

    console.log(this.sesionInfo)

    this.sesionService.sendRegister(this.sesionInfo);

    this.sesionService
    .sendRegister(this.sesionInfo)
    .then((res) => {
      console.log(res);
    });

    window.scrollTo(0, 0);
  }

}
