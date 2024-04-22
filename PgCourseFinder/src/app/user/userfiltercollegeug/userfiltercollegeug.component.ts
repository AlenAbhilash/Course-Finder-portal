import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userfiltercollegeug',
  templateUrl: './userfiltercollegeug.component.html',
  styleUrls: ['./userfiltercollegeug.component.scss'] 
})
export class UserfiltercollegeugComponent implements OnInit { 
  public ugcourse_id: any;
  public userpgcoursedataArray: any[] = []; 
  public userpossiblecoursedataArray: any[] = [];
  public collegeview: any[] = [];
  userfiltercollegeug!: FormGroup;

  constructor(private fb: FormBuilder,private dbservice: DbserviceService,private router: Router,private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => {
      this.ugcourse_id = Params.get('ugcourse_id');
    });
  }  

  ngOnInit() {
    this.dbservice.pgview({ ugcourse_id: this.ugcourse_id }).then((data: any) => {
      this.userpgcoursedataArray = data;
    });
    this.dbservice.possiblesview({ ugcourse_id: this.ugcourse_id }).then((data: any) => {
      this.userpossiblecoursedataArray = data;
    });
    this.dbservice.collegefliterview({ ugcourse_id: this.ugcourse_id }).then((data: any) => {
      this.collegeview = data;
    });
  }
}
