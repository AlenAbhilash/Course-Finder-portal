import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegebookingremarkothers',
  templateUrl: './collegebookingremarkothers.component.html',
  styleUrls: ['./collegebookingremarkothers.component.scss']
})
export class CollegebookingremarkothersComponent {
  seatbooking_id: any;
   othersremark!: FormGroup;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.seatbooking_id = Params.get('seatbooking_id');
      this.othersremark = this.fb.group({
        remark: [''],
        seatbooking_id: [this.seatbooking_id],
      });
    }); 
  }
  onSubmit() {
    this.dbservice.collegeothersremark(this.othersremark.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Remark Added');
        this.router.navigate(['/collegemaster/collegehome']);
      }
    });
  }
}
 