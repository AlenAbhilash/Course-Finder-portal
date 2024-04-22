import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-guestlogin',
  templateUrl: './guestlogin.component.html', 
  styleUrls: ['./guestlogin.component.scss']
})
export class GuestloginComponent implements OnInit {
  public LoginArray: any[] = [];
  LoginFormGroup: FormGroup;  

  constructor(private fb: FormBuilder,private router: Router,private dbservice: DbserviceService) {
    this.LoginFormGroup = this.fb.group({
      username: [''], 
      password: ['']
    });
  }

  OnSubmit() {
    this.dbservice.login(this.LoginFormGroup.value).then((data: any) => {
      this.LoginArray = data;
      if (!this.LoginArray || this.LoginArray.length === 0 || !this.LoginArray[0]) {
        alert('Invalid username and password');
        this.router.navigate(['/guestmaster/guestlogin']);
        return;
      } else {
        var status = this.LoginArray[0].status;
  
        if (!status) {
          alert('status is undefined. You are not an authorised person.');
          return;
        }
  
        localStorage.setItem("login_id", this.LoginArray[0].login_id);
        localStorage.setItem("username", this.LoginArray[0].username);
        var status = this.LoginArray[0].status;
  
        if (status === "adminc") {
          this.router.navigate(['/adminmaster/adminhome']);
        } else if (status === "accepted") {
          this.router.navigate(['/collegemaster/collegehome']);
        }
        else if (status === "userconfirmation") {
          this.router.navigate(['/usermaster/userhome']);
        } else {
          alert('You are not an authorised person.');
        }
      }
    });
  }  
        ngOnInit(): void {
        }
      }        
