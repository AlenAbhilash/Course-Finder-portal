import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminconfirmation',
  templateUrl: './adminconfirmation.component.html',
  styleUrls: ['./adminconfirmation.component.scss']
})
export class AdminconfirmationComponent implements OnInit {

  public collegedataArray: any[] = [];
  collegegroup!: FormGroup; 

  constructor(private fb: FormBuilder, private router: Router, private db: DbserviceService) { }

  ngOnInit(): void {
    this.collegegroup = this.fb.group({
      status: ['']
    });        
    this.db.admincollegeview().then((data: any) => {
        this.collegedataArray = data;
    });
  }

  OnChange() {
    const status = this.collegegroup.value.status;
    this.db.adminstatusview({ status }).then((data: any) => {
      this.collegedataArray = data;
    });
  }
  
  onSubmit(collegeid: string) {
    collegeid = collegeid;
    console.log("Collegeid", collegeid);
    this.db.admincollegeaccepted({ collegeid }).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('accepted');
        this.router.navigate(['adminmaster/adminconfirmation']);
      } else {
        alert('error');
      }
    });
  }

  onRejected(collegeid: string) {
    collegeid = collegeid;
    console.log("Collegeid", collegeid);
    this.db.admincollegerejected({ collegeid }).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('rejected');
        this.router.navigate(['adminmaster/adminconfirmation']);
      } else {
        alert('error');
      }
    });
  }
}
