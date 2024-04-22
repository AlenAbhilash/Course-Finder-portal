import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegeseat',
  templateUrl: './collegeseat.component.html',
  styleUrls: ['./collegeseat.component.scss'] 
})
export class CollegeseatComponent implements OnInit{
  public pgdataArray: any[] = [];
  public catdataArray: any[] = [];
  collegeseatreg!: FormGroup; 
  login_id:any;
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) {}
  ngOnInit(): void {
    this.collegeseatreg= this.fb.group({
      category_id:[''],
      collegepgcourse_id: [''],
      seat_number:[''],
      login_id:this.login_id=localStorage.getItem("login_id")
    });
    this.dbservice.collegepgv(this.login_id).then((data: any) => {
      this.pgdataArray = data; 
    }); 
    this.dbservice.catview().then((data: any) => {
      this.catdataArray = data;
    }); 
}
onSubmit() {
  const id=this.login_id
console.log(this.collegeseatreg.value);

  this.dbservice.collegeseatreg(this.collegeseatreg.value).then((confirmation: any) => { 
    if (confirmation.message === 'Success') {
      alert('Registered Successfully');
      this.router.navigate(['collegemaster/collegeseatview']);
    } else {
      let alertMessage = '';

      if (confirmation.message === 'Entry already exists') {
        alertMessage = 'Entry already exists';
      } else {
        alertMessage = 'Data do not insert, please check';
      }
      alert(alertMessage);
    }
  });
} 

}