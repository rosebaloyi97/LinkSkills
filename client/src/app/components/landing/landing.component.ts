import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ServerService } from 'src/app/services/server.service';
import { StoreService } from 'src/app/services/store.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  // creating registration form group with name and organisation name as form controls, 
  // which also indicates that both form controls are required fields.
  registerUserForm = this.fb.group({
    name: ['', Validators.required],
    organisationName: ['', Validators.required],
    email: ['', Validators.required]
  });

  // Injecting service, router, alert and Form builder
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertService: AlertService,
    private serverService: ServerService,
    private storeService: StoreService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.clearStorage();
  }

  // This method validates if a user has completed all required fields.
  onStartSurvey(): void {
    if (!this.registerUserForm.valid) {
      // alert user if fields are empty (User name and company name is required)
      this.customAlertValidation();
      return;
    }

    
    const { name, organisationName, email } = this.registerUserForm.value;
     // start spinner
     this.spinner.show();

    // subscribe to observable returned by the server service.
    this.serverService.register(name, organisationName, email).subscribe(
      (data) => {
        // retrieve insertId
        const { insertId } = data;

        // The setItem() method sets the value of the specified Storage Object item.
        // with a key of 'user' and object of name, organisation name, and InsertId as the value.
        localStorage.setItem(
          'user',
          JSON.stringify({ name, organisationName,email, insertId })
        );

        // set the data object of a single user.
        this.storeService.setUser({ name, organisationName,email, insertId });

        // end spinner
        this.spinner.hide();


        // once the user has entered their credentials route to the survey page.
        this.router.navigate(['linkskills/survey']);
      },
      (error) => {
        // end spinner
        this.spinner.hide();
        //catch errors, either when server server is down or there's a missing element.
        this.alertService.error('Sometheng went wrong, please try again later')
      }
    );
  }

  // Alert method to validate if user entered all the required fields, if not the user will then be alerted.
  customAlertValidation(): void {
    const { name, organisationName,email } = this.registerUserForm.value;

    // alert user if required fields are empty
    if (!name || !organisationName || !email) {
      this.alertService.error('All field are required');
    }
  }
  
  // This method clears the local storage.
  clearStorage(): void {
    localStorage.removeItem('user');
  }
}
