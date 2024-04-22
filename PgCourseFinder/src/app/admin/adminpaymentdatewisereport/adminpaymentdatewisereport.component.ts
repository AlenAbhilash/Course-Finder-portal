import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

export function DateNotPastValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    return { 'invalidDate': true };
  }

  return null;
}

@Component({
  selector: 'app-adminpaymentdatewisereport',
  templateUrl: './adminpaymentdatewisereport.component.html',
  styleUrls: ['./adminpaymentdatewisereport.component.scss']
})
export class AdminpaymentdatewisereportComponent implements OnInit {
  paymentdatearray: any[] = [];
  paymentdatewisereport: FormGroup;
  todayDate: string;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) {
    this.todayDate = this.getTodayDate();
  }

  ngOnInit(): void {
    this.paymentdatewisereport = this.fb.group({
      startdate: [''],
      enddate: ['']
    });
  }

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  maxStartDate(): string {
    return this.todayDate;
  }

  OnSubmit() {
    const startDate = new Date(this.paymentdatewisereport.value.startdate);
    const endDate = new Date(this.paymentdatewisereport.value.enddate);
    endDate.setHours(23, 59, 59, 999);
    this.dbservice.adminpaymentdataewise({startdate: startDate, enddate: endDate})
      .then((data: any) => {
        this.paymentdatearray = data;
        console.log(data);
      });
  }
}
