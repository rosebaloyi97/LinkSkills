import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Option from 'src/app/models/option';
import Question from 'src/app/models/question';
import { AlertService } from 'src/app/services/alert.service';
import { ServerService } from 'src/app/services/server.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'Quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  // question variable from parent component (survey component).
  @Input('question') question: Question;

  // We use outout directive with event emiter to use a function of the parent component (Survey).
  @Output('onSetIndexQuestion') onSetIndexQuestion = new EventEmitter<number>();

  // Options array of objects that stores the option to all questions.
  options: Option[] = [];

  constructor(
    private alertService: AlertService,
    private serverService: ServerService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    // uncheckes all the options.
    this.question.options.map((option) => (option.checked = false));
  }

  // This method add options for the user to select from.
  public addOption(event, option: Option, index: number): void {
    // If question requires a single option, uncheck all options.
    if (this.question.question_type === 'single') {
      this.question.options.map((option) => (option.checked = false));
    }

    // The target event property returns the element that triggered the event
    option.checked = event.target.checked;

    // If a user selects an option, check if question type requires a user to select single or multiple options.
    if (event.target.checked) {
      // When single option is required, allow user to select one option or allow user to select multiple options.
      this.question.question_type === 'single'
        ? this.addSingle(option)
        : this.addMultiple(option);
      return;
    }

    this.options = this.options.filter((op) => op !== option);
    // console.log(this.options);
  }

  // Method that adds a single option.
  private addSingle(option: Option): void {
    this.options[0] = option;
    // console.log(this.options);
  }

  // Method that adds a multiple options and push options to options array.
  private addMultiple(option: Option): void {
    this.options.push(option);
    // console.log(this.options);
  }

  // This  method will help you to iterate to the next question by sending 1 to the parent function.
  nextQuestion() {
    this.onSetIndexQuestion.emit(1);
  }

  // Method that allows user to submit options to back-end after delecting options.
  onSubmit() {
    // user needs to select atleast one option before submiting and moving to the next question.
    if (this.options.length === 0) {
      this.alertService.error('You need to select at least one option');
      return;
    }

    // console.log(this.options);

    // variable that stores the id of the options.
    let optionsIdArray = this.options.map((data) => data.option_id);

    // start spinner
    this.spinner.show();


    // Service that submit question id and array of optionId to specified endpoint in the back-end.
    this.serverService
      .submitQuestion(this.question.question_id, optionsIdArray)
      .subscribe(
        (data) => {
          // console.log(data);
          this.onSetIndexQuestion.emit(1);
          this.options = [];
          // end spinner
          this.spinner.hide();

        },
        (error) => {
          // If the back-end cannot receive submitted question, alert the user.
          console.log(error);
          this.alertService.error('Something went wrong, please try again');
           // end spinner
           this.spinner.hide();

        }
      );
  }
}
