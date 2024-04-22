import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegepossiblecourseview',
  templateUrl: './collegepossiblecourseview.component.html', 
  styleUrls: ['./collegepossiblecourseview.component.scss']
})
export class CollegepossiblecourseviewComponent implements OnInit{
  public possibledataArray: any[] = [];
  collegepossibleview!: FormGroup;
  login_id: any;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.db.collegepossiblecourseview(this.login_id).then((data: any) => {
        this.possibledataArray = data;
      });
    }
  }
  deletecollegepossible(collegepossiblecourse_id: string) {
    if(confirm('do you want to delete')){
    this.db.deletecollegepossible({ collegepossiblecourse_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        this.ngOnInit();
      }
    });
  }
  }
}
 