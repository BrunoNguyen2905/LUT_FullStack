import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
// import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
    AppointmentListComponent,
    NavbarComponent,
    AppointmentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
