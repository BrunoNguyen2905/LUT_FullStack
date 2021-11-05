import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'appointment-list',
    component: AppointmentListComponent,
  },
  {
    path: 'edit',
    component: AppointmentListComponent,
  },
  { path: ':id/edit', component: AppointmentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
