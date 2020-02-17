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

  pistasUsadas;

  sesionInfo = {
    id: '',
    edad: '',
    sexo: '',
    ronda: '',
    tiempoCountries: '',
    tiempoQuiz: '',
    respuestasAcertadas: '',
    respuestasFalladas: '',
    date: '',
    pistasRestantes: '',
    preguntasPista: '',
    consecAcert: '',
    consecFall: '',
    contadorNoConstestadas: ''
  }

  constructor(private sesionService: SessionService) { 
    this.showLogin = true;
  }

  ngOnInit(): void {

    this.countries =[ 
      { 
         "pais":"Antwerp",
         "foto":"amberes.png",
         "show":false, //show hint
       "pista": "Tomorrowland es la pista"
   
      },
      { 
         "pais":"Libia",
         "foto":"libia.png",
         "show":false,
        "pista": "País en época de guerra"
      },
      { 
         "pais":"Camboya",
         "foto":"camboya.png",
         "show":false,
       "pista": "Nom Pen es su capital."
      },
      { 
         "pais":"Belize",
         "foto":"belize.png",
         "show":false,
       "pista": "País de Centro América independizado"
      },
      { 
         "pais":"Hawaii",
         "foto":"hawaii.png",
         "show":false,
       "pista": "Te gustaría estar en sus maravillosas playas"
      },
      { 
         "pais":"Dominica",
         "foto":"dominica.png",
         "show":false,
       "pista": "Isla formada por 10 parroquias"
      },
      { 
         "pais":"Qatar",
         "foto":"qatar.png",
         "show":false,
       "pista": "País machista"
      },
      { 
         "pais":"Islas Marianas",
         "foto":"nothermarian.png",
         "show":false,
       "pista": "Es un Estado libre asociado a EE.UU."
      },
      { 
         "pais":"Surinam",
         "foto":"surinam.png",
         "show":false,
       "pista": "Paramaribo es su capital"
      },
      { 
         "pais":"Etiopía",
         "foto":"etiopia.png",
         "show":false,
       "pista": "Su capital es Adís Adeba"
      },
      { 
         "pais":"Kazajistan",
         "foto":"kazajistan.jpg",
         "show":false,
       "pista": "Pertenecío a la antigua República Soviética. Su capital es Ástana"
      },
      { 
         "pais":"Groenlandia",
         "foto":"groenlandia.jpg",
         "show":false,
       "pista": "Se sitúa próxima a Dinamarca"
      },
      { 
        "pais":"Nepal",
        "foto":"nepal.jpg",
        "show":false,
      "pista": "Situada justo debajo de China"
      },
      { 
        "pais":"Seychelles",
        "foto":"seychelles.png",
        "show":false,
      "pista": "Islas"
    },
    { 
      "pais":"Sri Lanka",
      "foto":"srilanka.jpg",
      "show":false,
    "pista": "Isla asiática"
  },
  { 
    "pais":"Santa Lucía",
    "foto":"santalucia.jpg",
    "show":false,
  "pista": "Recemos"
},
{ 
  "pais":"Kiribati",
  "foto":"kiribati.jpg",
  "show":false,
"pista": "El pajáro es un símbolo mítico de países de Oceanía"
},
{ 
  "pais":"Somalia",
  "foto":"somalia.png",
  "show":false,
"pista": "País en el cuerno de África"
},
{ 
  "pais":"Emirato C. Del Norte",
  "foto":"caucasian.png",
  "show":false,
"pista": "Territorio que pertenecío al islam durante un breve periodo de tiempo"
},
{ 
  "pais":"Ciudad del Vaticano",
  "foto":"vatican.png",
  "show":false,
"pista": "Pequeña ciudad dónde vive el Papa"
},{ 
  "pais":"Leichtesntein",
  "foto":"leichtesntein.png",
  "show":false,
"pista": "España endoso la mayor victoria de su historia a este país"
}
   ];

      let resultsNumbers=[];
      let entro = false;

      let i;
      for (i  = 0; i < 12; i++){
        entro = false;
        while(!entro){
          let number = Math.floor(Math.random() * 21);
          if (resultsNumbers.indexOf(number) < 0) {
            resultsNumbers.push(number);
            entro = true;
          }
        }
      }

    this.questions = [];
    for (let resultsNumber of resultsNumbers) {
      this.questions.push(this.countries[resultsNumber])
    }

    console.log(this.questions);

    let paises = []
    paises.push(this.sesionInfo.id)
    for(let question of this.questions) {
      paises.push(question.pais)
    }

    console.log(paises);

    this.sesionService.logQuestions(this.questions);

    for(let question of this.questions) {
      let entro; let i;
      let posiblesRespuestas = [];
      let resultsNumbers=[];
      for (i  = 0; i < 4; i++){
        while(!entro){
          let number = Math.floor(Math.random() * 21);
          if (posiblesRespuestas.indexOf(number) < 0) {
            posiblesRespuestas.push(number);
            break;
          }
        }
      }

      let numberResponse = this.countries.indexOf(question)
      if(posiblesRespuestas.indexOf(numberResponse) < 0) {
        posiblesRespuestas[Math.floor(Math.random() * 4)] = numberResponse;
      }

      question.respuestas = [];

      for (let posiblesRespuesta of posiblesRespuestas) {
        question.respuestas.push(this.countries[posiblesRespuesta])
      }

    }
  
  }

  loginResult(event) {
    this.showLogin = false;
    this.showCountries = true;

    this.sesionInfo.id = event.userData.id;
    this.sesionInfo.edad = event.userData.edad;
    this.sesionInfo.sexo = event.userData.sexo;

    //console.log(this.sesionInfo);
  }

  goQuiz(event) {
    this.showCountries = false;
    this.showQuiz = true;

    this.sesionInfo.tiempoCountries = event.tiempoCountries;

    window.scrollTo(0, 0);
  }

  quizResult(event) {
    this.showResults = true;

    this.sesionInfo.tiempoQuiz = event.tiempoQuiz;
    this.sesionInfo.respuestasAcertadas = event.respuestasAcertadas;
    this.sesionInfo.respuestasFalladas = event.respuestasFalladas;
    this.sesionInfo.pistasRestantes = event.pistasRestantes;
    this.sesionInfo.preguntasPista = event.preguntasPista;
    this.sesionInfo.consecAcert = event.consecAcert;
    this.sesionInfo.consecFall = event. consecFall;
    this.sesionInfo.contadorNoConstestadas = event.contadorNoConstestadas;

    this.pistasUsadas = 3 - parseFloat(this.sesionInfo.pistasRestantes);

    this.sesionInfo.date = new Date().toLocaleString();

    console.log(this.sesionInfo)

    this.sesionService.sendRegister(this.sesionInfo);

    window.scrollTo(0, 0);

    setTimeout(function() {
      window.scrollTo(0,0);
    }, 100);

  }

}
