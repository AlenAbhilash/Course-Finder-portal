import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminpgcourseview',
  templateUrl: './adminpgcourseview.component.html', 
  styleUrls: ['./adminpgcourseview.component.scss'] 
})
export class AdminpgcourseviewComponent { 
  public ugdataArray: any[] = []; 
  public pgdataArray: any[] = [];
  pggroup!: FormGroup;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  ngOnInit(): void { 
    this.pggroup = this.fb.group({
      ugcourse_id: [''],
    });

    this.db.ugviews().then((data: any) => {
      this.ugdataArray = data;
    }); 
  }
 
  OnChange() {
    const ugcourse_id = this.pggroup.value.ugcourse_id;
    this.db.pgview({ ugcourse_id }).then((data: any) => {
      this.pgdataArray = data; 
    });
  }
  
  deletepg(pgcourse_id: string) {
    if(confirm('do you want to delete')){
    this.db.deletepg({ pgcourse_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        this.OnChange();
      }
    });
  }
  }
}

