import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-collegeseatview',
  templateUrl: './collegeseatview.component.html',
  styleUrls: ['./collegeseatview.component.scss'] 
})
export class CollegeseatviewComponent implements OnInit{
  public seatdataArray: any[] = [];
  collegeseatview!: FormGroup;
  login_id: any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }
  ngOnInit(): void {
    this.login_id = localStorage.getItem("login_id");
    if (this.login_id) {
      this.db.collegeseatview(this.login_id).then((data: any) => {
        this.seatdataArray = data; 
      }); 
    }
  }
  deletecollegeseat(seat_id: string) {
    if(confirm('do you want to delete')){
    this.db.deletecollegeseat({ seat_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        this.ngOnInit();
      }
    });
  }
  }
}
