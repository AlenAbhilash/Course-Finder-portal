import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegedetailsview',
  templateUrl: './collegedetailsview.component.html',
  styleUrls: ['./collegedetailsview.component.scss']
}) 
export class CollegedetailsviewComponent implements OnInit{ 
  public collegedataArray: any[] = [];
  collegeview!: FormGroup;
  login_id: any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }
  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.db.collegeview(this.login_id).then((data: any) => {
        this.collegedataArray = data; 
      }); 
    }
  }

}
