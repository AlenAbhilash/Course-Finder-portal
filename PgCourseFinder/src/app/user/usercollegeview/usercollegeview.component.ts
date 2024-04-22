import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-usercollegeview',
  templateUrl: './usercollegeview.component.html',
  styleUrls: ['./usercollegeview.component.scss']
})
export class UsercollegeviewComponent implements OnInit {
  public collegedataArray: any[] = [];
  public collegedataArraypg: any[] = [];
  public collegepgcoursedataArray: any[] = [];
  public collegetypeview: any[] = [];
  usercollegeview!: FormGroup;
  login_id: any;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  ngOnInit(): void {
    this.usercollegeview = this.fb.group({
      pgcourse_id: [''], 
      type: [''], 
    });

    this.db.usercollegeview().then((data: any) => {
      this.collegedataArray = data;
    });

    this.db.possibleview().then((data: any) => {
      this.collegepgcoursedataArray = data;
    });
  }
  select(type: string) {
    this.usercollegeview.patchValue({ type });
    this.db.collegetypeview({ type }).then((data: any) => {
      this.collegetypeview = data;
    });
  }
  OnChange(pgcourse_id: any) {
    this.usercollegeview.patchValue({ pgcourse_id });
    this.db.collegeviewpg({ pgcourse_id }).then((data: any) => {
      this.collegedataArraypg = data;
    });
  }
}
