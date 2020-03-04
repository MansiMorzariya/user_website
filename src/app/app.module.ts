import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  imports:      
  [ BrowserModule, 
  ReactiveFormsModule,
  RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'student',component:StudentComponent},
    {path:'signup',component:SignupComponent},
    {path:'student_details/:id',component:StudentDetailsComponent},
    {path:'',component:StudentComponent}
    
  ])
  ],
  declarations: [ AppComponent, HomeComponent, StudentComponent, SignupComponent, StudentDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
