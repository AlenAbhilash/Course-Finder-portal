import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegeacceptedremark',
  templateUrl: './collegeacceptedremark.component.html',
  styleUrls: ['./collegeacceptedremark.component.scss']
})
export class CollegeacceptedremarkComponent {

  seatbooking_id: any;
  Acceptedremark!: FormGroup;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.seatbooking_id = Params.get('seatbooking_id');
      this.Acceptedremark = this.fb.group({
        remark: [''],
        seatbooking_id: [this.seatbooking_id],
      });
    }); 
  }
  onSubmit() {
    this.dbservice.collegeacceptedremark(this.Acceptedremark.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Remark Added');
        this.router.navigate(['/collegemaster/collegehome']);
      }
    });
  }
}
 