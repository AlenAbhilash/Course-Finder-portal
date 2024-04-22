import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegpgcourse',
  templateUrl: './collegpgcourse.component.html',
  styleUrls: ['./collegpgcourse.component.scss']
})
export class CollegpgcourseComponent implements OnInit {
  public ugdataArray: any[] = [];
  public pgdataArray: any[] = [];
  collegepgreggroup!: FormGroup;
  login_id: any;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.collegepgreggroup = this.fb.group({
      ugcourse_id: [''],
      pgcourse_id: [''],
      fees: [''],
      login_id: this.login_id = localStorage.getItem("login_id")
    });

    this.dbservice.ugviews().then((data: any) => {
      this.ugdataArray = data;
    });
  }

  OnChange() {
    const ugcourse_id = this.collegepgreggroup.value.ugcourse_id;
    this.dbservice.pgview({ ugcourse_id }).then((data: any) => {
      this.pgdataArray = data;
    });
  }

  onSubmit() {
    const id = this.login_id;
    console.log(this.collegepgreggroup.value);

    this.dbservice.collegepgr(this.collegepgreggroup.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Registered Successfully');
        this.router.navigate(['collegemaster/collegepgcourseview']);
      } else {
        let alertMessage = '';

        if (confirmation.message === 'Entry already exists') {
          alertMessage = 'Entry already exists';
        } else {
          alertMessage = 'Data do not insert, please check';
        }
        alert(alertMessage);
      }
    });
  }

}
