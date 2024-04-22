import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-usercollegeviewmore',
  templateUrl: './usercollegeviewmore.component.html',
  styleUrls: ['./usercollegeviewmore.component.scss'] 
}) 
export class UsercollegeviewmoreComponent implements OnInit{
  college_id: any;
  public collegedataArray: any;
  public possiblearray: any; 
  userollegeviewmore!: FormGroup;
  constructor(
    private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService
  ) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.college_id = params.get('college_id');
    });
  }
  ngOnInit(): void {
    this.userollegeviewmore = this.fb.group({
    });
    const college_id = this.college_id;
    console.log(college_id);
    this.dbservice.collegeviewmore({ college_id }).then((data: any) => {
      this.collegedataArray = data;
      console.log(this.collegedataArray);
        this.userollegeviewmore.setValue
        ({
        });
      });
      this.dbservice.possiblecollegecourse({ college_id }).then((data: any) => {
        this.possiblearray = data;
        console.log(this.collegedataArray);
          this.userollegeviewmore.setValue
          ({
          });
        });
  }

}
 