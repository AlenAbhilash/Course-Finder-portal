import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-interviewmanagement',
  templateUrl: './interviewmanagement.component.html',
  styleUrls: ['./interviewmanagement.component.scss'] 
})
export class InterviewmanagementComponent implements OnInit {
  public interviewarray: any[] = []; 
  Interviewform!: FormGroup; 
  login_id: any;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.db.collegeinterview(this.login_id).then((data: any) => {
        this.interviewarray = data; 
      }); 
    }
  }

}