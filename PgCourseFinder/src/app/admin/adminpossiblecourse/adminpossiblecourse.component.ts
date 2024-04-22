import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminpossiblecourse',
  templateUrl: './adminpossiblecourse.component.html',
  styleUrls: ['./adminpossiblecourse.component.scss']
})
export class AdminpossiblecourseComponent {
  public UgArray: any[] = [];
  public PossibleArray: any[] = [];
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  possibleregform = this.fb.group({
    ugcourse_id: [''],
    possiblecourse_id : [''],
    // pgcourse_id: ['']
  });

  ngOnInit(): void {
    this.dbservice.ugview().then((data: any) => {
      this.UgArray = data;
    });
    this.dbservice.possibleview().then((data: any) => { 
      this.PossibleArray = data;
    });
  }
  onSubmit() {
    console.log(this.possibleregform.value);
    this.dbservice.possibleregform(this.possibleregform.value).then((confirmation: any) => {
      if (confirmation.message === 'Success') {
        alert('Registered Successfully');
        this.router.navigate(['adminmaster/adminpossiblecourse']);
      } else {
        alert('Data did not insert, please check');
      }
    })
  }
}
 