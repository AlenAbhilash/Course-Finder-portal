import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collegemaster',
  templateUrl: './collegemaster.component.html',
  styleUrls: ['./collegemaster.component.scss']
})
export class CollegemasterComponent {
  login_id: any;

  constructor(private router: Router) {
    this.login_id = localStorage.getItem('login_id');
  }
  
  logout() {
    localStorage.removeItem('login_id');
    console.log(this.login_id);
    this.router.navigate(['guestmaster/guestlogin']);
  }
}
 