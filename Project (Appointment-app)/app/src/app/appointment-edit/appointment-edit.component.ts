import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointments.service';
import { Appointment } from '../../../Appointment';
@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { }
  @Input() appointment?: Appointment;
  public successMsg?: string;
  public errorMsg?: string;

  ngOnInit(): void {
    this.getCurrentAppointment();
  }
  getCurrentAppointment(): void {
    const id =this.route.snapshot.paramMap.get('id');
    this.appointmentService.getOneAppointment(id!)
      .subscribe(appointment => this.appointment = appointment);
  }

  putAppointment(id: string) {
    this.successMsg = '';
    this.errorMsg = '';
    
    this.appointmentService.putAppointment(this.appointment!.appointmentDate, this.appointment!.name, this.appointment!.email, this.appointment!._id)
      .subscribe((edittedAppointment: any) => {
        const appointmentDate = new Date(edittedAppointment.msg).toDateString();
        this.successMsg = `Appointment Editted Successfully for ${appointmentDate}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }
}
