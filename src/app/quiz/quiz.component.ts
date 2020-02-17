import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input() questions;

  @Output() quizResult;

  currentQuestionSet: [];
  contadorAcertadas: number = 0;
  contadorFalladas: number = 0;
  contadorNoConstestadas: number = 0;
  showAnswers: boolean;

  respuestas=[];

  pistas: number = 3;
  preguntasPista = [];
  preguntasConPista: number = 0;
  time: number = 60;
  interval;

  answersForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.quizResult = new EventEmitter<string>();

    this.answersForm = fb.group({
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
      question11: '',
      question12: ''
    });
   }

  ngOnInit(): void {
    let sendQuiz = true;
      this.interval = setInterval(() => {
        if(this.time >= 0) {
          this.time--;
        }else{
          if(sendQuiz == true) {
            this.sendQuiz();
            this.time = 0;
            sendQuiz = false
          }
          
        }
      },1000)
  }

  sendQuiz() {
    this.showAnswers = true;

    this.questions[0].answer = this.answersForm.get('question1').value.pais == this.questions[0].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[0].pais;
    this.questions[1].answer = this.answersForm.get('question2').value.pais == this.questions[1].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[1].pais;
    this.questions[2].answer = this.answersForm.get('question3').value.pais == this.questions[2].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[2].pais;
    this.questions[3].answer = this.answersForm.get('question4').value.pais == this.questions[3].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[3].pais;
    this.questions[4].answer = this.answersForm.get('question5').value.pais == this.questions[4].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[4].pais;
    this.questions[5].answer = this.answersForm.get('question6').value.pais == this.questions[5].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[5].pais;
    this.questions[6].answer = this.answersForm.get('question7').value.pais == this.questions[6].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[6].pais;
    this.questions[7].answer = this.answersForm.get('question8').value.pais == this.questions[7].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[7].pais;
    this.questions[8].answer = this.answersForm.get('question9').value.pais == this.questions[8].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[8].pais;
    this.questions[9].answer = this.answersForm.get('question10').value.pais == this.questions[9].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[9].pais;
    this.questions[10].answer = this.answersForm.get('question11').value.pais == this.questions[10].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[10].pais;
    this.questions[11].answer = this.answersForm.get('question12').value.pais == this.questions[11].pais ? "correcta" : 
    "incorrecta. La respuesta correcta era " + this.questions[11].pais;

    this.respuestas.push(this.answersForm.get('question1').value.pais);
    this.respuestas.push(this.answersForm.get('question2').value.pais);
    this.respuestas.push(this.answersForm.get('question3').value.pais);
    this.respuestas.push(this.answersForm.get('question4').value.pais);
    this.respuestas.push(this.answersForm.get('question5').value.pais);
    this.respuestas.push(this.answersForm.get('question6').value.pais);
    this.respuestas.push(this.answersForm.get('question7').value.pais);
    this.respuestas.push(this.answersForm.get('question8').value.pais);
    this.respuestas.push(this.answersForm.get('question9').value.pais);
    this.respuestas.push(this.answersForm.get('question10').value.pais);
    this.respuestas.push(this.answersForm.get('question11').value.pais);
    this.respuestas.push(this.answersForm.get('question12').value.pais);

    let i;
    let consecAcert = 0, acert = 0, consecFall = 0, fall = 0;
    for(i = 0; i < 12; i++) {
      if(this.respuestas[i] == this.questions[i].pais){
        if(this.preguntasPista.find(element => element == i) >= 0 ) this.preguntasConPista++; 
      }

      if(this.respuestas[i] == this.questions[i].pais){
        acert++;
        if(fall > consecFall) consecFall = fall;
        fall = 0;
      } else {
        fall++;
        if(acert > consecAcert) consecAcert = acert;
        acert = 0;
      }
    }
    if(acert > consecAcert) consecAcert = acert;
    if(fall > consecFall) consecFall = fall;

    console.log("consec acert: "+ consecAcert + " fall " + consecFall);

    console.log(this.answersForm.get('question1').value.pais)
    console.log(typeof this.answersForm.get('question1').value.pais != undefined)

    this.answersForm.get('question1').value.pais == this.questions[0].pais ? this.contadorAcertadas++ :  (this.answersForm.get('question1').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question2').value.pais == this.questions[1].pais ? this.contadorAcertadas++ : (this.answersForm.get('question2').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question3').value.pais == this.questions[2].pais ? this.contadorAcertadas++ : (this.answersForm.get('question3').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question4').value.pais == this.questions[3].pais ? this.contadorAcertadas++ : (this.answersForm.get('question4').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question5').value.pais == this.questions[4].pais ? this.contadorAcertadas++ : (this.answersForm.get('question5').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question6').value.pais == this.questions[5].pais ? this.contadorAcertadas++ : (this.answersForm.get('question6').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question7').value.pais == this.questions[6].pais ? this.contadorAcertadas++ : (this.answersForm.get('question7').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question8').value.pais == this.questions[7].pais ? this.contadorAcertadas++ : (this.answersForm.get('question8').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question9').value.pais == this.questions[8].pais ? this.contadorAcertadas++ : (this.answersForm.get('question9').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question10').value.pais == this.questions[9].pais ? this.contadorAcertadas++ : (this.answersForm.get('question10').value.pais != undefined ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question11').value.pais == this.questions[10].pais ? this.contadorAcertadas++ : (this.answersForm.get('question11').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);
    this.answersForm.get('question12').value.pais == this.questions[11].pais ? this.contadorAcertadas++ : (this.answersForm.get('question12').value.pais != undefined  ? this.contadorFalladas++ : this.contadorNoConstestadas++);


    console.log(this.contadorAcertadas);
    console.log(this.contadorFalladas);
    console.log("Preguntas con pista "+ this.preguntasConPista)
    console.log("Time quiz countries: " + this.time);
    let finalTime = (60- this.time);
    this.quizResult.emit({tiempoQuiz: finalTime, 
                      respuestasAcertadas: this.contadorAcertadas, 
                      respuestasFalladas: this.contadorFalladas, 
                      pistasRestantes: this.pistas,
                      preguntasPista: this.preguntasConPista,
                      consecAcert: consecAcert,
                      consecFall: consecFall,
                      contadorNoConstestadas: this.contadorNoConstestadas,
                      respuesta: this.respuestas});
  }

  unlockHint(event, question, number) {
    let individual = this.questions.filter((item) => item.pais == question.pais);
    if(this.pistas > 0){
      individual[0].show = true;
      this.pistas--;
    }
    this.preguntasPista.push(number);
  }

}
