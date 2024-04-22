import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-guesthome',
  templateUrl: './guesthome.component.html',
  styleUrls: ['./guesthome.component.scss']
})
export class GuesthomeComponent implements OnInit{ 
  public collegeviewdataArray: any[] = [];
  collegepaymentarray: any[] = [];
  login_id: any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }
  ngOnInit(): void {
    this.db.admincollegeview().then((data: any) => {
      this.collegeviewdataArray = data;
    });
  }
 
}
 