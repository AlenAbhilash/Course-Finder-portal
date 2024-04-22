import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userforgotpassword',
  templateUrl: './userforgotpassword.component.html',
  styleUrls: ['./userforgotpassword.component.scss']
})
export class UserforgotpasswordComponent implements OnInit{
  forgotPasswordForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({ 
      username: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const username = this.forgotPasswordForm.value.username;
      this.dbservice.userforgetpassword({ username }).then((confirmation: any) => {
        if (confirmation.message === 'Success') {
          alert('Password Updated');
          this.router.navigate(['/guset/gueslogin']);
        }
      });
    }
  }
  }
  

