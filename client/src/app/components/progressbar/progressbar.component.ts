import { Component, Input, OnInit } from '@angular/core';
import Question from 'src/app/models/question';

@Component({
  selector: 'Progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: [ './progressbar.component.scss' ]
})
export class ProgressbarComponent implements OnInit {

  // Input directives allow commmunication between parent and child component
  @Input('indexQuestion') indexQuestion: number = 0;
  @Input('questions') questions: Question[] = [];
  // Boolean that toggles the modal.
  showModal: boolean = false;

  constructor () { }


  ngOnInit (): void { }


  // method that calculates how the progress bar should step and return the percentage as a string.
  calculateProgress (): string {

    const INDEX: number = this.indexQuestion + 1;
    const LENGTH: number = this.questions.length;

    let percentage: number = Math.floor((INDEX * 100) / LENGTH);

    return `${percentage - Math.round(100 / LENGTH)}%`;
  }



}
