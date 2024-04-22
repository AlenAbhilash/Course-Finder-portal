import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegebookingpage',
  templateUrl: './collegebookingpage.component.html',
  styleUrls: ['./collegebookingpage.component.scss']
})
export class CollegebookingpageComponent implements OnInit{
  public pgdataArray: any[] = []; 
  collegebooking!: FormGroup;
  login_id: any;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.db.collegepgv(this.login_id).then((data: any) => {
        this.pgdataArray = data; 
      }); 
    }
  }
}
  