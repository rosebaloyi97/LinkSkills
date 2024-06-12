import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Question from '../models/question';
import { environment } from 'src/environments/environment';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  // server url stored on environment variables.
  SERVER_API_URL: string = environment.SERVER_API_URL;

  constructor (
    private http: HttpClient,
    private storeService: StoreService) { }


  // Get questions from API url.
  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.SERVER_API_URL}/linkskills/questions`);
  }

  // Method that register a user.
  register (name: string, companyName: string, email :string): Observable<any> {
    const data = {
      respondent_name: name,
      company_name: companyName,
      Email :email
      
    }
    console.log(data.Email);
    

    return this.http.post(`${this.SERVER_API_URL}/linkskills/respondent`, data);
  }

  // Submit question to the back-end API.
  submitQuestion (question_id: number, option_id: number[]): Observable<any> {
    const { insertId: respondent_id } = this.storeService.user;
    // console.log({ respondent_id, question_id, option_id });
    return this.http.post<Observable<any>>(`${this.SERVER_API_URL}/linkskills/answer`, { respondent_id, question_id, option_id });
  }

  // Error handling in HTTP.
  handleError (error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
