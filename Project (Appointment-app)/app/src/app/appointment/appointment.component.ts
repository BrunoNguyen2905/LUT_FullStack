import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointments.service';
import { Appointment } from '../../../Appointment';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [DatePipe]
})
export class AppointmentComponent implements OnInit {

  public successMsg?: string;
  public errorMsg?: string;
  public appointmentDate!: string;
  name!: string;
  email!: string;

  constructor(private appointmentService: AppointmentService, public datePipe: DatePipe) { }

  ngOnInit() {
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe((createdAppointment: any) => {
        this.appointmentDate =  '';
        this.name = '';
        this.email = '';
        console.log('appointmentDate', createdAppointment.msg)
        const appointmentDate = new Date(createdAppointment.msg).toDateString();
        console.log('appointmentDate1', appointmentDate, createdAppointment.appointmentDate)
        this.successMsg = `Appointment Booked Successfully for ${appointmentDate}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}