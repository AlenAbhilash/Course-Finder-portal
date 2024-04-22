import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegebookingremark',
  templateUrl: './collegebookingremark.component.html',
  styleUrls: ['./collegebookingremark.component.scss']
})
export class CollegebookingremarkComponent{
  seatbooking_id: any;
  bookingremark!: FormGroup;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.seatbooking_id = Params.get('seatbooking_id');
      this.bookingremark = this.fb.group({
        interview_date: [''],
        remark: [''],
        seatbooking_id: [this.seatbooking_id],
      });
    });
  }
  onSubmit() {
    this.dbservice.collegeremark(this.bookingremark.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Remark Added');
        this.router.navigate(['/collegemaster/collegehome']);
      }
    });
  }
}
