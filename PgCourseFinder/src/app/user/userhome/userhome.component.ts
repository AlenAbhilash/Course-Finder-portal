import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
}) 
export class UserhomeComponent implements OnInit{ 
  public userviewarray: any[] = [];
  public collegeviewdataArray: any[] = [];  
  public ugdataArray: any[] = []; 
  login_id: any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }
  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
      this.db.userview(this.login_id).then((data: any) => {
        this.userviewarray = data; 
      }); 
      this.db.admincollegeview().then((data: any) => {
        this.collegeviewdataArray = data;
      });
      this.db.ugviews().then((data: any) => {
        this.ugdataArray = data;
      });
    }

}
