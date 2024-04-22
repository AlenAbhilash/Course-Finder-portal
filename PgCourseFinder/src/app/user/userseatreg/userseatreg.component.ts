import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userseatreg',
  templateUrl: './userseatreg.component.html',
  styleUrls: ['./userseatreg.component.scss']
})
export class UserseatregComponent implements OnInit {
  public collegepgdataArray: any[] = [];
  public collegeseatdataArray: any[] = [];
  public collegesemdataArray: any[] = [];
  public userseatreg!: FormGroup;
  public college_id: any;
  collegepgcourse_id: any;
  login_id: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbservice: DbserviceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.college_id = params.get('college_id');
    });
  }

  ngOnInit(): void { 
    this.userseatreg = this.fb.group({
      college_id: [this.college_id],
      collegepgcourse_id: [''],
      seat_id: [''],
      login_id: this.login_id = localStorage.getItem("login_id")
    });

    this.dbservice.collegepgcourseview({ college_id: this.college_id }).then((data: any) => {
      this.collegepgdataArray = data;
    });
    this.dbservice.collegepgcoursesem({ college_id: this.college_id }).then((data: any) => {
      this.collegesemdataArray = data;
    });
  }

  onSubmit(seatId: any) {
    this.userseatreg.patchValue({
      seat_id: seatId
    });

    console.log(this.userseatreg.value);

    this.dbservice.userbook(this.userseatreg.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Registered Successfully');
        this.router.navigate(['usermaster/userbookingpageview']);
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
