import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegechangepassword',
  templateUrl: './collegechangepassword.component.html', 
  styleUrls: ['./collegechangepassword.component.scss']
})
export class CollegechangepasswordComponent implements OnInit {
  collegechangepassword!: FormGroup;
  login_id: any;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.collegechangepassword = this.fb.group({
      username: [''],
      password: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
    this.login_id = localStorage.getItem("login_id");
  }

  onSubmit() {
    if (this.collegechangepassword.valid) {
      const { username, password, newPassword, confirmPassword } = this.collegechangepassword.value;
      if (newPassword === confirmPassword) { 
        this.dbservice.userchangepassword({
          login_id: this.login_id,
          username,
          currentPassword: password, 
          newPassword,
        }).then((confirmation: any) => {
          if (confirmation.message === 'Success') {
            alert('Password Updated');
            this.router.navigate(['/collegemaster/collegehome']);
          } else {
            alert('Invalid Username or Password');
          }
        });
      } else {
        alert('New Passwords do not match. Please re-enter.');
      }
    }
  }
}
