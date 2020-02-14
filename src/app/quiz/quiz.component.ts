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
  showAnswers: boolean;

  pistas: number = 3;
  time: number = 0;
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
      question9: ''
    });
   }

  ngOnInit(): void {
      this.interval = setInterval(() => {
        if(this.time >= 0) {
          this.time++;
        }
      },1000)
  }

  sendQuiz() {
    console.log(this.answersForm.get('question1').value.pais);

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

    console.log(this.questions[0].pais)
    this.answersForm.get('question1').value.pais == this.questions[0].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question2').value.pais == this.questions[1].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question3').value.pais == this.questions[2].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question4').value.pais == this.questions[3].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question5').value.pais == this.questions[4].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question6').value.pais == this.questions[5].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question7').value.pais == this.questions[6].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question8').value.pais == this.questions[7].pais ? this.contadorAcertadas++ : this.contadorFalladas++;
    this.answersForm.get('question9').value.pais == this.questions[8].pais ? this.contadorAcertadas++ : this.contadorFalladas++;

    console.log(this.contadorAcertadas);
    console.log(this.contadorFalladas);
    console.log("Time quiz countries: " + this.time);
    let finalTime = this.time;
    this.quizResult.emit({tiempoQuiz: finalTime, respuestasAcertadas: this.contadorAcertadas, respuestasFalladas: this.contadorFalladas});
  }

  unlockHint(event, question) {
    let individual = this.questions.filter((item) => item.pais == question.pais);
    if(this.pistas > 0){
      individual[0].show = true;
      this.pistas--;
    }
  }

}
