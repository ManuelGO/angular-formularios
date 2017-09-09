import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TareaFormComponent } from './tarea-form/tarea-form.component';
import { NewCoursesFormComponent } from './new-courses-form/new-courses-form.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    TareaFormComponent,
    SignupFormComponent,
    NewCoursesFormComponent,
    ChangePassComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
