import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegepossbilereg',
  templateUrl: './collegepossbilereg.component.html',
  styleUrls: ['./collegepossbilereg.component.scss']
})
export class CollegepossbileregComponent implements OnInit {
  public possibledataArray: any[] = [];
  public ugdataArray: any[] = [];
  possiblepgreggroup!: FormGroup;
  login_id: any;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    this.possiblepgreggroup = this.fb.group({
      possiblecourse_id: [''],
      ugcourse_id: [''],
      login_id: this.login_id
    });
    const login_id = this.login_id;
    this.dbservice.collegepossibleviewforreg({ login_id }).then((data: any) => {
      this.ugdataArray = data;
    });
  }

  OnChange() {
    const ugcourse_id = this.possiblepgreggroup.value.ugcourse_id;
    this.dbservice.possiblesview({ ugcourse_id }).then((data: any) => {
      this.possibledataArray = data;
    });
  }

  onSubmit(possiblecourse_id: any) {
    this.possiblepgreggroup.patchValue({
      possiblecourse_id: possiblecourse_id
    });

    console.log('Form Value:', this.possiblepgreggroup.value);

    this.dbservice.collegepossiblereg(this.possiblepgreggroup.value)
      .then((confirmation: any) => {
        console.log('Server Response:', confirmation);

        if (confirmation.message === 'Success') {
          alert('Registered Successfully');
          this.router.navigate(['collegemaster/collegepossiblecourseview']);
        } else if (confirmation.message === 'Entry already exists') {
          alert('Entry already exists');
        } else {
          alert('Data do not insert, please check');
        }
      });
  }
}
