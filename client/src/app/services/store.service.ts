import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userSurvey = localStorage.getItem('user') ?
    new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user'))) :
    new BehaviorSubject<User>({ name: undefined, organisationName: undefined, email:undefined});

  constructor (private http: HttpClient) { }

  //url = 'http://10.1.0.125:5000/linkSkills';
  APIUrl = environment.apiUrl;
  url = environment.url;

  public get user (): User {
    return this.userSurvey.getValue();
  }

  public setUser (user: User): void {
    this.userSurvey.next(user);
  }
  getTechnical(){
    return this.http.get(`${this.url}/technicalSkills`)
  }

  getSoft()
  {
    return this.http.get(`${this.url}/softskills`)
  }

  getTabs()
  {
    return this.http.get(`${this.url}/tabsOrSpace`)
  }

  getAge()
  {
    return this.http.get(`${this.url}/age`)
  }

  getIDE()
  {
    return this.http.get(`${this.url}/IDE`)
  }

  getGender()
  {
    return this.http.get(`${this.url}/gender`)
  }
  getCapsorShift()
  {
    return this.http.get(`${this.url}/capOrShift`)
  }

  getEthnicity()
  {
    return this.http.get(`${this.url}/ethnicity`)
  }

  getTechnology()
  {
    return this.http.get(`${this.url}/technologies`)
  }

  getProvince()
  {
    return this.http.get(`${this.url}/province`)
  }

  getHomeOrwork()
  {
    return this.http.get(`${this.url}/homeOrWork`)
  }

  getOS()
  {
    return this.http.get(`${this.url}/operatingSystems`)
  }


}
