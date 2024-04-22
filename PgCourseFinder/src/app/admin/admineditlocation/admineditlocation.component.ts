import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-admineditlocation',
  templateUrl: './admineditlocation.component.html',
  styleUrls: ['./admineditlocation.component.scss']
})
export class AdmineditlocationComponent { 
  loc_id: any;
  public locationArray: any;
  public districtdataarray: any;
  locationeditform!: FormGroup;

  constructor(
    private fb: FormBuilder,private router: Router,private route: ActivatedRoute,private dbservice: DbserviceService
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.loc_id = params.get('loc_id');
    });
  }
 
  ngOnInit(): void {
    this.locationeditform = this.fb.group({
      dis_id: [''],
      loc_id: [''],
      loc_name: [''], 
    });

    const loc_id = this.loc_id;
    console.log(loc_id);
    this.dbservice.getlocationdetails({ loc_id }).then((data: any) => { 
      this.locationArray = data;
      console.log(this.locationArray);
      this.locationeditform.setValue({
        loc_id: data[0].loc_id,
        dis_id: data[0].dis_id,
        loc_name: data[0].loc_name, 
      });
    });

    this.dbservice.districtview().then((data: any) => {
      this.locationArray = data;
    });
  }

  onSubmit() {
    this.dbservice.locationedit(this.locationeditform.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Location Details Updated');
        this.router.navigate(['/adminmaster/adminlocview']);
      }
    });
  }
}
