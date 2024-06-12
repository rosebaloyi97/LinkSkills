
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ReportComponent } from './components/report/report.component';
import { SurveyComponent } from './components/survey/survey.component';
import { AgeComponent } from './components/report/age/age.component';
import {SocialToolBarComponent} from './components/social-tool-bar/social-tool-bar.component'

const routes: Routes = [
  {path: '', redirectTo: 'linkskills', pathMatch: 'full'},
  {path: 'linkskills', component: LandingComponent},
  {path: 'linkskills/survey', component: SurveyComponent},
  {path: 'linkskills/report', component: ReportComponent},
  {path: 'linkskills/about', component: AboutComponent},
  {path: 'linkskills/age', component: AgeComponent},
  {path: 'linkskills/social', component:SocialToolBarComponent}
 // {path: '**', redirectTo: 'linkskills', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
