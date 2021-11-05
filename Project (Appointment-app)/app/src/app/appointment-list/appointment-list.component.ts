import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointments.service';
import { Appointment } from '../../../Appointment';
import { mergeMap } from 'rxjs/operators';
import {Router} from '@angular/router'
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  public loading = true;
  public errorMsg?: string;
  public successMsg?: string;
  public appointments!: Appointment[];
  public columns = ['appointmentDate', 'name', 'email','edit', 'cancel'];
  public editStatus = false;
  constructor(private appointmentService: AppointmentService, private router: Router,) { }

  ngOnInit() {
    this.appointmentService.getAppointments()
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false;
      });
  }

  cancelAppointment(id: string) {
    this.appointmentService.cancelAppointment(id)
      .pipe(
        mergeMap(() => this.appointmentService.getAppointments())
      )
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.successMsg = 'Successfully cancelled appointment';
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }


  editAppointment(id: string) {
    this.router.navigate([`${id}/edit`]);
  }
}