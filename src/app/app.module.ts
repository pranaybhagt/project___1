import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormWithFormBilderComponent } from './reactive-form-with-form-bilder/reactive-form-with-form-bilder.component';
import { ValidationsComponent } from './validations/validations.component';
import { FromPracticeComponent } from './from-practice/from-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ReactiveFormWithFormBilderComponent,
    ValidationsComponent,
    FromPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
