import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxChartsModule }from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SurveyComponent } from './components/survey/survey.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ReportComponent } from './components/report/report.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ModalComponent } from './components/modal.component';

// Reporting
import { AgeComponent } from './components/report/age/age.component';
import { FutureTechComponent } from './components/report/future-tech/future-tech.component';
import { GenderComponent } from './components/report/gender/gender.component';
import { OperatingSystemComponent } from './components/report/operating-system/operating-system.component';
import { RemoteWorkingComponent } from './components/report/remote-working/remote-working.component';
import { SoftSkillsComponent } from './components/report/soft-skills/soft-skills.component';
import { TechnicalSkillsComponent } from './components/report/technical-skills/technical-skills.component';
import { RaceComponent } from './components/report/race/race.component';
import { IdeComponent } from './components/report/ide/ide.component';
import { CapsComponent } from './components/report/caps/caps.component';
import { TabsComponent } from './components/report/tabs/tabs.component';
import { SocialToolBarComponent } from './components/social-tool-bar/social-tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SurveyComponent,
    QuizComponent,
    ReportComponent,
    NavbarComponent,
    ProgressbarComponent,
    ModalComponent,
    TechnicalSkillsComponent,
    SoftSkillsComponent,
    AgeComponent,
    GenderComponent,
    OperatingSystemComponent,
    FutureTechComponent,
    RemoteWorkingComponent,
    FutureTechComponent,
    RaceComponent,
    IdeComponent,
    CapsComponent,
    TabsComponent,
    SocialToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
