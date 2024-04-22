import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.scss']
})
export class UsermasterComponent {
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