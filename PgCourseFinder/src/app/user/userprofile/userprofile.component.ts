import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit{ 
  public userdataArray: any[] = []; 
  userview!: FormGroup;
  login_id: any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }
  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.db.userview(this.login_id).then((data: any) => {
        this.userdataArray = data; 
      }); 
    }
  }

}

