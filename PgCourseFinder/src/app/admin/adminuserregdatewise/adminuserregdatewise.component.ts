import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminuserregdatewise',
  templateUrl: './adminuserregdatewise.component.html',
  styleUrls: ['./adminuserregdatewise.component.scss']
})
export class AdminuserregdatewiseComponent implements OnInit{
  userregdatewisearray: any[] = [];
  userregdatewise: any;
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService){}   
  ngOnInit(): void {
    this.userregdatewise = this.fb.group({
      startdate: [''],
      enddate: ['']
    })
  } 
  OnSubmit() {
    this.dbservice.adminuserregdataewise(this.userregdatewise.value).then((data: any) => {
      this.userregdatewisearray = data;
      console.log(data)
    })
  }
}
 