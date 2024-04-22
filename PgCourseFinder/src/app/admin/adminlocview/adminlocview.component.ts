import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminlocview',
  templateUrl: './adminlocview.component.html',
  styleUrls: ['./adminlocview.component.scss']
})
export class AdminlocviewComponent implements OnInit {
  public DistrictdataArray: any[] = [];
  public LocationdataArray: any[] = [];
  locationgroup!: FormGroup;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  ngOnInit(): void {
    this.locationgroup = this.fb.group({
      dis_id: [''],  
    });

    this.db.districtview().then((data: any) => {
      this.DistrictdataArray = data;
    });
  }
 
  OnChange() {
    const dis_id = this.locationgroup.value.dis_id;
    this.db.locationview({ dis_id }).then((data: any) => {
      this.LocationdataArray = data;
    }); 
  }

  deleteloc(loc_id: string) {
    if(confirm('do you want to delete')){
    this.db.deleteloc({ loc_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        this.OnChange();
      }
    });
  }
  }
}
