import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userfiltercollege',
  templateUrl: './userfiltercollege.component.html',
  styleUrls: ['./userfiltercollege.component.scss']
})
export class UserfiltercollegeComponent implements OnInit{
  public ugdataArray: any[] = []; 
  userug!: FormGroup;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }
  ngOnInit(): void {
    this.db.ugviews().then((data: any) => {
      this.ugdataArray = data;
    });
  }

}
 