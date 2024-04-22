import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userchangepassword',
  templateUrl: './userchangepassword.component.html',
  styleUrls: ['./userchangepassword.component.scss']
})
export class UserchangepasswordComponent implements OnInit {
  changepassword!: FormGroup;
  login_id: any;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.changepassword = this.fb.group({
      username: [''],
      password: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
    this.login_id = localStorage.getItem("login_id");
  }

  onSubmit() {
    if (this.changepassword.valid) {
      const { username, password, newPassword, confirmPassword } = this.changepassword.value;
      if (newPassword === confirmPassword) { 
        this.dbservice.userchangepassword({
          login_id: this.login_id,
          username,
          currentPassword: password, 
          newPassword,
        }).then((confirmation: any) => {
          if (confirmation.message === 'Success') {
            alert('Password Updated');
            this.router.navigate(['/usermaster/userhome']);
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
