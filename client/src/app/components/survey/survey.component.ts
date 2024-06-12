import { Component, OnInit } from '@angular/core';
import Question from 'src/app/models/question';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: [ './survey.component.scss' ]
})
export class SurveyComponent implements OnInit {

  // first index of the question, this will helps to track position
  indexQuestion: number;

  // Array of object that stores the questions.
  questions: Question[] = [];

  // Boolean that toggles the modal.
  showModal: boolean = false;

  constructor (
    private serverService: ServerService) { }

  ngOnInit (): void {

    // Call get question method.
    this.getQuestions();
    this.indexQuestion = localStorage.getItem('index') ? JSON.parse(localStorage.getItem('index')) : 0;
  }


  // Method that gets the questions in the service, subscribe to returned observable and assign it to question variable.
  getQuestions (): void {
    this.serverService.getQuestions()
      .subscribe(questions => {
        this.questions = questions;
      })
  }

  // Method that sets the index that keep track of the position.
  onSetIndexQuestion (value: number): void {
    this.indexQuestion = this.indexQuestion + value;

    // store question index on local storage.
    localStorage.setItem('index', `${this.indexQuestion}`);

    // Question index and questions length are equal toggle the modal to true, which will show the modal.
    if (this.indexQuestion === (this.questions.length)) {
      this.showModal = true;

      // remove index from local storage.
      localStorage.removeItem('index');
    }
  }




}
