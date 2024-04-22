import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegerejectedremark',
  templateUrl: './collegerejectedremark.component.html',
  styleUrls: ['./collegerejectedremark.component.scss']
})
export class CollegerejectedremarkComponent { 

  seatbooking_id: any;
  Rejectedremark!: FormGroup;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.seatbooking_id = Params.get('seatbooking_id');
      this.Rejectedremark = this.fb.group({
        remark: [''],
        seatbooking_id: [this.seatbooking_id],
      });
    }); 
  }
  onSubmit() {
    this.dbservice.collegerejectedremark(this.Rejectedremark.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Remark Added');
        this.router.navigate(['/collegemaster/collegehome']);
      }
    });
  }
}

