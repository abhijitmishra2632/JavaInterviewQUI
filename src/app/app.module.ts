import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
