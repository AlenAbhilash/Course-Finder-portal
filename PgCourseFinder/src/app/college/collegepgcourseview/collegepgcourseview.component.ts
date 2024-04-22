import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegepgcourseview', 
  templateUrl: './collegepgcourseview.component.html',
  styleUrls: ['./collegepgcourseview.component.scss']
})
export class CollegepgcourseviewComponent implements OnInit {
  public pgdataArray: any[] = []; 
  collegepgview!: FormGroup;
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
  deletecollegepg(collegepgcourse_id: string) {
    if(confirm('do you want to delete')){
    this.db.deletecollegepg({ collegepgcourse_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        this.ngOnInit();
      }
    });
  }
  }
  
}
