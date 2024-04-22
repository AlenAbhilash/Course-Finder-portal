import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-admineditdis',
  templateUrl: './admineditdis.component.html',
  styleUrls: ['./admineditdis.component.scss']
})
export class AdmineditdisComponent implements OnInit{
  dis_id: any;
  public disArray: any[] = [];
  diseditform!: FormGroup;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.dis_id = Params.get('dis_id'); 
    });
  }
  ngOnInit(): void {
    this.diseditform = this.fb.group({
      dis_id : [''],
      dis_name: [''],
    
    });
    const dis_id = this.dis_id;
    console.log(dis_id);
  
    this.dbservice.disget({ dis_id }).then((data: any) => {
      this.disArray = data;
      console.log(this.disArray);
      if (data.length > 0) {
        this.diseditform.patchValue({
          dis_id: data[0].dis_id,
          dis_name: data[0].dis_name,
        });
      }
    });
  }

  onSubmit() {
    if (!this.diseditform.value.dis_name) {
      const data = {
        dis_id: this.diseditform.value.dis_id,
        dis_name: this.disArray[0].dis_name,
      };
  
      this.dbservice.updatedisdata(data).then((confirmation: any) => {
        alert(' Details Updated Successfully');
        this.router.navigate(['/adminmaster/admindisview']);
      });
    } else {
      this.dbservice.updatedisdata(this.diseditform.value).then((confirmation: any) => {
        alert(' Details Updated Successfully');
        this.router.navigate(['/adminmaster/admindisview']);
      });
    }
  }

}

