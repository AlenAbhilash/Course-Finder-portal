import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegehome',
  templateUrl: './collegehome.component.html',
  styleUrls: ['./collegehome.component.scss']
})
export class CollegehomeComponent implements OnInit{ 
  public collegedataArray: any[] = [];
  public pgdataArray: any[] = []; 
  public collegeappliedseatsarray: any[] = []; 
  collegepaymentarray: any[] = [];
  login_id: any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }
  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
      this.db.collegeview(this.login_id).then((data: any) => {
        this.collegedataArray = data; 
      }); 
      this.db.collegepgv(this.login_id).then((data: any) => {
        this.pgdataArray = data; 
      });
      this.db.collegepaymentview(this.login_id).then((data: any) => {
        this.collegepaymentarray = data; 
      });
      this.db.collegeseatview(this.login_id).then((data: any) => {
        this.collegeappliedseatsarray = data; 
      });
    }
  }



